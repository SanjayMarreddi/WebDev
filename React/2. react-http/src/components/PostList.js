import React, { Component } from 'react'
import axios from 'axios'

// If needed, we can see how the control changes in Video-42 at around 6 min.
class PostList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts : [],
         error : ""
      }
    }

    // This is executed only once during the component's life time. This is executed once the component mounts for the first time.
    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')

        .then(response => {
            console.log(response)
            this.setState({posts: response.data})
        })

        .catch(error => {
            console.log("error")
            this.setState({error: 'Error retrieving data'})
        })
    }

  render() {
      const {posts, error } = this.state
    return (
      <div>List of Posts
          {
              posts.length ? 
              posts.map( post => <div key = {post.id}> {post.title} </div> ) :
              null
          }
          {
              error  ? <div> {error} </div> : null
          }
      </div>
    )
  }
}

export default PostList