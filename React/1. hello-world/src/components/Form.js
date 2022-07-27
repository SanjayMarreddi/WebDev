import React, { Component } from 'react'

class Form extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       username : '',
       comments : '',
       topic : 'react' 
    }
  }
  
  // event.target.value : Contains the input value typed by the user.
  handleUsernameChange = (event) => {
     this.setState( {
         username : event.target.value
     } )
  }

  handleCommentsChange = (event) => {
      this.setState({
        comments : event.target.value
      })
  }
  
  handleTopicChange = (event) => {
      this.setState({
          topic : event.target.value
      })
  }
  
  handleSubmit = (event) => {
    alert( `${this.state.username} ${this.state.comments} ${this.state.topic}` )
    event.preventDefault()  // Makes sure that page doesnot refresh after clicking OK at "alert" button.
  }

  // We have 3 steps when dealing with forms. write html/jsx -> create a prop inside the state -> Define the handler.
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Username</label>
                <input type='text' value={this.state.username} onChange={this.handleUsernameChange}></input>
            </div>
            <div>
                <label>comments</label>
                <textarea value={this.state.comments} onChange={this.handleCommentsChange}></textarea>
            </div>
            <div>
                <label>Topic</label>
                <select value={this.state.topic} onChange={this.handleTopicChange}>
                    <option value="react" > React </option>
                    <option value="angular"> Angular </option>
                    <option value="vue">  Vue </option>
                </select>
            </div>
            <button type='submit'>Submit</button>
        </form>
    )
  }
}

export default Form