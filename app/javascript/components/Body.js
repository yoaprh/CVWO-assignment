import React from "react"
import PropTypes from "prop-types"
import TaskList from './TaskList.js'
import NewTask from './NewTask.js'
class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      showPopup: false
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this)
    this.addNewTask = this.addNewTask.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.deleteTask = this.deleteTask.bind(this)
    this.handleUpdate = this.handleUpdate.bind(this);
    this.updateTask = this.updateTask.bind(this)

  }

  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  handleUpdate(task) {
    fetch(`http://localhost:3000/api/v1/tasks/${task.id}`,
      {
        method: 'PUT',
        body: JSON.stringify({ task: task }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        this.updateTask(task)
      })
  }
  updateTask(task) {
    let newTasks = this.state.tasks.filter((f) => f.id !== task.id)
    newTasks.push(task)
    this.setState({
      tasks: newTasks
    })
  }

  handleDelete(id) {
    fetch(`http://localhost:3000/api/v1/tasks/${id}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => {
        this.deleteTask(id);
      })
  }
  deleteTask(id) {
    var newTasks = this.state.tasks.filter((task) => task.id !== id)
    this.setState({
      tasks: newTasks
    })
  }
  handleFormSubmit(name, description, due, tags) {
    let body = JSON.stringify({ task: { name: name, description: description, due: due, tags: tags } })
    fetch('http://localhost:3000/api/v1/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: body,
    }).then((response) => { return response.json() })
      .then((task) => {
        this.addNewTask(task)
      })

  }
  addNewTask(task) {
    this.setState({
      tasks: this.state.tasks.concat(task)
    })
  }

  componentDidMount() {
    fetch('/api/v1/tasks.json')
      .then((response) => { return response.json() })
      .then((data) => { this.setState({ tasks: data }) });
  }
  render() {
    return (
      <div>
        <NewTask handleFormSubmit={this.handleFormSubmit} />
        <TaskList tasks={this.state.tasks} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} />
      </div>
    )
  }
}

export default Body
