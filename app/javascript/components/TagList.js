
import React from "react"
import PropTypes from "prop-types"
import Tag from "./Tag.js"
const TagList = (props) => {
  var tags = props.tags.map((tag) => {
    return (
      <div key={tag.id}>
        <Tag tag={tag} handleDelete={props.handleDelete} />
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