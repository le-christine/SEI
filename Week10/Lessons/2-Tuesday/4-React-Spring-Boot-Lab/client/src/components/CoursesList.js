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
        code = {this.state.code}
        name = {this.state.name}
        handleCodeChange={this.handleCodeChange}
        handleNameChange={this.handleNameChange}
        submitForm={this.submitForm}
      />
      {this.state.courses.map((course, index) => {
        return (
          <Course
          {...course}
          key={index}
          />
        )
      })}
      </div>
    )
  }
}

export default CoursesList;
