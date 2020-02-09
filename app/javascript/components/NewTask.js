import React from "react"
import PropTypes from "prop-types"
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
const NewTask = (props) => {
  let formFields = {}

  return (
    // <div>
    //   <img src={require('../../assets/images/newtask.png')} style={{ width: 150, height: 55 }} onClick={() => this.props.togglePopup.bind(this)}></img>
    // </div>
    <form onSubmit={(e) => { props.handleFormSubmit(formFields.name.value, formFields.description.value, formFields.due.value, formFields.tags.value); e.target.reset(); }
    }>
      <input ref={input => formFields.name = input} placeholder='Title' />
      <input ref={input => formFields.description = input} placeholder='Description' />
      <input type="date" ref={input => formFields.due = input} placeholder='Due Date' />
      <input ref={input => formFields.tags = input} placeholder='Tags' />
      <button>Submit</button>
    </form>
  )
}
export default NewTask
