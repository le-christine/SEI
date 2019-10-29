import React, { Component } from 'react';

class CourseNewForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newCourse: {}
    }
  }

  handleChange = (e) => {
    const attributeToChange = e.target.name;
    const newValue = e.target.value;

    const updatedNewCourse = {...this.state.newCourse};
    updatedNewCourse[attributeToChange] = newValue;
    this.setState({newCourse:updatedNewCourse});
  }

  render() {
    return (
      <div>
        <h2>Create a new course</h2>

        <form>
          <div>
            <label htmlFor="title">Name</label>
            <input
              name="name"
              type="text"
              onChange={this.handleChange}
            />
          </div>

          <div>
            <label htmlFor="description">Code</label>
            <input
              name="code"
              type="text"
              onChange={this.handleChange}
            />
          </div>

          <div>
            <input type="submit" value="Create Course"/>
          </div>
        </form>
        <hr/>
        <hr/>
      </div>
    )
  }

}

export default CourseNewForm;
