import React from 'react'
import { useSelector } from "react-redux"
import { Link, useParams } from 'react-router-dom'

export const Profile = () => {
  const { username } = useParams()

  const user = useSelector(state =>
    state.users.find(user => user.name === username)
  )
  
  const posts = useSelector(state => 
    state.posts.filter(post => post.user === user.id)
  )
  
  const renderedPosts = posts.map(post => (
    <article className="post-excerpt" key={post.id}>
      <h3>{post.title}</h3>
      <p className="post-content">{post.content.substring(0, 100)}</p>
      <Link to={`/posts/${post.id}`} className="button muted-button">
        View Post
      </Link>
    </article>
  ))

  return (
    <section>
      <h1>{user.name}'s Profile</h1>
      <h2>{user.name}'s Posts</h2>
      {renderedPosts}
    </section>
  )


}