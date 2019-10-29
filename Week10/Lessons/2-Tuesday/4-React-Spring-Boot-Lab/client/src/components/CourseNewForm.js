import React from 'react';

function CourseNewForm(props) {
  return (
    <div>
    <h2>Create New Course</h2>
    <form onSubmit={props.submitForm}>
    <label htmlFor="code">Code</label>
    <input
    type="text"
    label="code"
    value={props.code}
    onChange={props.handleCodeChange}
    id="title"
    placeholder="code"
    />
    <label htmlFor="name">Name</label>
    <input
    type="text"
    label="name"
    value={props.name}
    onChange={props.handleNameChange}
    id="name"
    placeholder="name"
    />
    <input type="submit" value="Create Course"/>
    </form>
    </div>
  )
}


export default CourseNewForm;
