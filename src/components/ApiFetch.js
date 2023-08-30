import React, {useState, useEffect} from 'react'
import axios from 'axios'

const ApiFetch = () => {

    const [posts, setPosts] = useState([])
    const url = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(() => { 
        //axiosのパターン
        axios.get(url)
        .then(res => {
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })

        // fetchのパターン
        // fetch(url, {method: 'GET'})
        // .then(res => res.json())
        // .then(data => {
        //     setPosts(data)
        // })

    }, [])

  return (
    <>
        <div>ApiFetch</div>
        <ul>
            {posts.map(post => {
                return (
                    <>
                        <ul>
                            <li key={post.id}>#{post.id} {post.title}</li>
                        </ul>
                    </>
                )
            })}
        </ul>
    </>
  )
}

export default ApiFetch