import React, { Component } from 'react'
import Course from './Course'
import CourseNewForm from './CourseNewForm'

import axios from 'axios'

class CourseList extends Component {

    state = {
        courses: []
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

    handleCourseChange = async (event, index) => {
        try {
            const updatedCoursesList = [...this.state.courses]
            const courseToUpdate = updatedCoursesList[index]

            const updatedCourse = await axios({
                method: 'PUT',
                url: `/course/${ courseToUpdate.id }`,
                data: courseToUpdate
            });
            const attributeToChange = event.target.name
            const newValue = event.target.value

            courseToUpdate[attributeToChange] = newValue
            updatedCoursesList[index] = courseToUpdate
            this.setState({courses: updatedCoursesList})
        } catch(error) {
            console.log('Error editing Course!');
            console.log(error);
        }
    }

    updateCourse = async (index) => {
        try {
            const courseToUpdate = this.state.courses[index]
            await axios.patch
        } catch(error) {
            console.log('Error updating course!');
            console.log(error);
        }
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
                            handleCourseChange={this.handleCourseChange} />
                    )})
                }
            </div>
        )
    }
}

export default CourseList
