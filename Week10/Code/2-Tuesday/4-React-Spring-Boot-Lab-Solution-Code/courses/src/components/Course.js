import React, {Component} from 'react'

class Course extends Component {
    constructor(props) {
        super(props);

        this.state = {
            course: this.props.course,
        }

        this.handleCourseChange = this.handleCourseChange.bind(this);
        this.handleCourseSubmit = this.handleCourseSubmit.bind(this);
    }

    handleCourseChange(event) {
        const course = this.state.course;

        if (event.target.name === 'name') {
            course.name = event.target.value;
        }
        else {
            course.code = event.target.value;
        }

        this.setState({
            course,
        });
    };

    handleCourseSubmit(event) {
        event.preventDefault();
        this.props.updateCourse(this.state.course);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleCourseSubmit}>
                    <input
                        name="name"
                        onChange = {this.handleCourseChange}
                        value={this.state.course.name}
                    />
                    <input
                        name="code"
                        onChange = {this.handleCourseChange}
                        value={this.state.course.code}
                    />
                    <button type="submit">Submit</button>
                </form>
                <button onClick={() => this.props.delete(this.state.course)}>Delete!</button>
                <hr/>
            </div>
        )
    }

}

export default Course
