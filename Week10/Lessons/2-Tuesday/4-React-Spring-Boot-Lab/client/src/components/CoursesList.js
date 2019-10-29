import React, { Component } from 'react';

//Custom components
import Course from './Course';
import CourseNewForm from './CourseNewForm';

class CoursesList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: []
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

  render() {
    return (
      <div>
      <h1>Courses Board</h1>
      <CourseNewForm/>
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
