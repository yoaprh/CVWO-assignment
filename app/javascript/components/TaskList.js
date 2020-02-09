
import React from "react"
import PropTypes from "prop-types"
import Task from "./Task.js"
const TaskList = (props) => {
  var tasks = props.tasks.map((task) => {
    return (
      <div key={task.id}>
        <Task task={task} handleDelete={props.handleDelete} handleUpdate={props.handleUpdate} />
      </div>
    )
  })
  return (
    <div>
      {tasks}
    </div>
  )
}
export default TaskList
