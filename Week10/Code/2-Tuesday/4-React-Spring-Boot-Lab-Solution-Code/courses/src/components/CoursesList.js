import React, { Component } from 'react'
import Course from './Course'
import CourseNewForm from './CourseNewForm'

import axios from 'axios'

class CourseList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            courses: [],
        }

        this.updateCourse = this.updateCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }

    async componentWillMount() {
        try {
            const response = await axios.get('/course/list')
            this.setState({ courses: response.data })
        } catch (error) {
            console.log('Error retrieving ideas!')
        }
    }

    createCourse = async (course, index) => {
        try {
            const newCourseResponse = await axios.post(`/course`, course)
            console.log(newCourseResponse);
            const updatedCoursesList = [...this.state.courses]
            updatedCoursesList.push(newCourseResponse.data)
            this.setState({courses: updatedCoursesList})

        } catch(error) {
            console.log('Error creating new Course!')
            console.log(error)
        }
    }

    updateCourse = async (course) => {
        try {
            await axios({
                method: 'PUT',
                url: `/course/update`,
                data: course
            });
            const updatedCoursesList = [...this.state.courses]
            const index = updatedCoursesList;
            updatedCoursesList[index] = course;
            console.log(updatedCoursesList);
            this.setState({courses: updatedCoursesList})
        } catch(error) {
            console.log('Error editing Course!');
            console.log(error);
        }
    }

    deleteCourse = async (course) => {
        try {
            const status = await axios({
                method: 'DELETE',
                url: '/course/delete',
                data: course
            })
        } catch(error) {
            console.log('Error deleting Course!');
            console.log(error);
        }

        const coursesList = [...this.state.courses];
        const index = coursesList.indexOf(course);
        const newCourses = coursesList.splice(index, 1);
        this.setState({courses: newCourses })
    }

    render() {
        return (
            <div>
                <h1>Courses</h1>
                <CourseNewForm createCourse={this.createCourse}/>
                {
                    this.state.courses.map((course, index) => {
                    return (
                        <Course
                            {...course}
                            key={index}
                            index={index}
                            course={course}
                            updateCourse={this.updateCourse}
                            delete={this.deleteCourse}
                        />
                    )})
                }
            </div>
        )
    }
}

export default CourseList
