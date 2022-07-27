import React, {useState, useEffect} from 'react'
import axios from 'axios'

function DataFetching() {

   const [posts, setPosts] = useState({})
   const [id, setId] = useState(1)
   const [idFromButtonClick, setIdFromButtonClick] = useState(1)

   
   const handleClick = () => {
    setIdFromButtonClick(id)
    }
    
   useEffect( () => {
       axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
       .then(res => {
           console.log(res)
           setPosts(res.data)
       })
       .catch(err => {
           console.log(err)
       })
   }, [idFromButtonClick])   

   // [id] is to be used when we want to fetch the single post data without the button, but just based on what user types into the text area.
   // [] is used since we want to fetch the data only once. This line is for the case when we want to fetch all posts.

  return (
    <div>
        <input type="text" value= {id} onChange = {e => setId(e.target.value)}></input>
        <button type='button'  onClick={handleClick}> Fetch Post</button>
        <div>{posts.title} </div>
        {/* <ul>
            { posts.map( post => <li key = {post.id}> {post.title} </li>  )  }
        </ul> */}
    </div>
  )
}

export default DataFetching