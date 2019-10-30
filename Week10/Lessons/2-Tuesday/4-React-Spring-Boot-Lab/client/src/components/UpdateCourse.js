import React from 'react';

function UpdateCourse (props) {
  return (
    <div>
    <p>Update course</p>
    <form onSubmit = {props.updateCourse}>
    <input
      type="text"
      placeholder="course code"
      value={props.updateCode}
      onChange={props.handleCodeUpdateChange}
      />
    <input
      type="text"
      placeholder="new course name"
      value={props.updateName}
      onChange={props.handleNameUpdateChange}/>

    <input type="submit"/>
    </form>
    <hr/>
    </div>
  )
}

export default UpdateCourse;
