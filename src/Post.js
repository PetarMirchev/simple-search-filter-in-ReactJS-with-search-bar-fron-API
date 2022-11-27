import React from 'react'

const Post = ({post}) => {
  return (
    <div className='card-box'>
    <article>
        <h2 className='post-title'>{post.title}</h2>
        <p className='post-text'>{post.body}</p>
        <p className='post-id'>Post ID: {post.id}</p>
    </article>
    </div>
  )
}

export default Post