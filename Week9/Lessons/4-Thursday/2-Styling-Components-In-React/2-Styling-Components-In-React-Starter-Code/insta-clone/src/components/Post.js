import React, { Component } from 'react'
import Comment from './Comment'
import { FaHeart, FaComment } from 'react-icons/fa'

class Post extends Component {

  render () {
    const { post } = this.props
    return (
      <div>
        <div>
          <img src={post.user.profile_pic} alt={post.user.username} />
          <p>{post.user.username}</p>
        </div>
        <div>
          <img src={post.image.url} />
          <p>{post.caption}</p>
        </div>
        <div>
          <FaHeart />
          <FaComment />
        </div>
        <p>{post.likes.length} likes</p>
        {post.comments.map((comment, i) => <Comment key={i} comment={comment}/>)}
      </div>
    )
  }
}

export default Post
