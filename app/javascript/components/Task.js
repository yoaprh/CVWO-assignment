import React from "react"
import PropTypes from "prop-types"
class Task extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editable: false
    }
    this.handleEdit = this.handleEdit.bind(this)
  }
  handleEdit() {
    if (this.state.editable) {
      let name = this.name.value
      let description = this.description.value
      let due = this.due.value
      let tags = this.tags.value
      let id = this.props.task.id
      let task = { id: id, name: name, description: description, due: due, tags: tags }
      this.props.handleUpdate(task)
    }
    this.setState({
      editable: !this.state.editable
    })
  }
  render() {
    let name = this.state.editable ? <input type='text' ref={input => this.name = input} defaultValue={this.props.task.name} /> : <h2> {this.props.task.name}</h2>
    let description = this.state.editable ? <input type='text' ref={input => this.description = input} defaultValue={this.props.task.description} /> : <p>{this.props.task.description}</p>
    let due = this.state.editable ? <input type='text' ref={input => this.due = input} defaultValue={this.props.task.due} /> : <p>{this.props.task.due}</p>
    let tags = this.state.editable ? <input type='text' ref={input => this.tags = input} defaultValue={this.props.task.tags} /> : <a>{this.props.task.tags}</a>
    return (
      <div>
        <li>
          {name}
          {description}
          {due}
          <h3>Tags: </h3>{tags}
          {this.state.editable ? <img src={require('../../assets/images/tick.png')} style={{ width: 25, height: 25 }} onClick={() => this.handleEdit()}></img>
            : <img src={require('../../assets/images/pencil.png')} style={{ width: 25, height: 25 }} onClick={() => this.handleEdit()}></img>}
          <img src={require('../../assets/images/delete.png')} style={{ width: 25, height: 25 }} onClick={() => this.props.handleDelete(this.props.task.id)}></img></li>
      </div>
    )
  }
}

export default Task
