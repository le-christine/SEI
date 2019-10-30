import React, { Component } from 'react';

//Custom components
import Course from './Course';
import CourseNewForm from './CourseNewForm';

class CoursesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
      code: '',
      name: ''
    }
  }

  componentDidMount() {
    fetch('/course/list')
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      this.setState({
        courses: res
      })
    })
    .catch((err) => {
      console.log(err);
    })
  }

  submitForm = (e) => {
    e.preventDefault();
    fetch('/course', {
      method: 'post',
      headers: {
        'Accept' : 'application/json, text/plain, */*',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        code: this.state.code,
        name: this.state.name
      })
    })
    .then(res => res.json())
    .then((res) => {
      let courses= this.state.courses;
      courses.push(res);
      this.setState({
        courses,
        code: '',
        name: ''
      });
    })
    .catch(err => console.log(err))
  }

  deleteCourse = (course, index) => {
    console.log(course.code + '\n' + course.name)
    fetch('/course/delete', {
      method: 'delete',
      headers: {
        'Accept' : 'application/json, text/plain, */*',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        code: course.code,
        name: course.name
      })
    })
    .then(res => res.json())
    .then(res => console.log(res))
    .then((res) => {
      let courses= this.state.courses;
      courses.splice(index,1);
      this.setState({
        courses
      })
    })
    .catch(err => console.log(err))
  }

  updateCourse = (course, index) => {
    fetch('/course/update', {
      method: 'put',
      headers: {
        'Accept' : 'application/json, text/plain, */*',
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        code: course.code,
        name: course.name
      })
    })
    .then(res => res.json())
    .then((res) => {
      let courses = this.state.courses;
      courses[index]['code'] = course.code;
      courses[index]['name'] = course.name;
      this.setState({
        courses
      })
    })
  }

  handleCodeChange = (e) => {
    this.setState({code: e.target.value})
  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value})
  }


  render() {
    return (
      <div>
      <h1>Courses Board</h1>
      <CourseNewForm
        title = {"Create a new course"}
        code = {this.state.code}
        name = {this.state.name}
        handleCodeChange={this.handleCodeChange}
        handleNameChange={this.handleNameChange}
        submitForm={this.submitForm}
      />

      {this.state.courses.map((course, index) => {
        return (
          <div>
          <Course
          {...course}
          key={index}
          delete={() => this.deleteCourse(course, index)}
          />

          <p>Update course</p>
          <input
            type="text"
            placeholder="new course code"
            value={this.code}
            onChange={this.handleCodeChange}>
          </input>
          <input
            type="text"
            placeholder="new course name"
            value={this.name}
            onChange={this.handleNameChange}>
          </input>
          <input type="submit"/>
          <hr/>
          </div>
        )
      })}
      </div>
    )
  }
}

export default CoursesList;
