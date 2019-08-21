import React, {Component} from 'react'

class Course extends Component {

    render() {
        return (
            <div>
                <input
                    name="name"
                    onChange = {(event) => this.props.handleCourseChange(event, this.props.index)}
                    value={this.props.name} />
                <input
                    name="code"
                    onChange = {(event) => this.props.handleCourseChange(event, this.props.index)}
                    value={this.props.code} />
                <hr/>
            </div>
        )
    }

}

export default Course
