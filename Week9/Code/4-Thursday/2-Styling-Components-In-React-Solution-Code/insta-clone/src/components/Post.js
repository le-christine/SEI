import React, { Component } from 'react'
import Comment from './Comment'
import styled from 'styled-components'
import { FaHeart, FaComment } from 'react-icons/fa'

const PostContainer = styled.div`
  background-color: #fff;
  border-radius: 3px;
  width: 95vw;
  max-width: 600px;
  margin: 20px auto;
  border: 1px solid #e6e6e6;
`

const PostUser = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 16px;
  img{
    height: 30px;
    width: 30px;
    border-radius: 100%;
  }
  span{
    padding-left: 5px;
    font-weight: bold;
  }
`

const PostContent = styled.div`
  img{
    max-width: 600px;
    margin: 0 auto;
  }
`

const PostInfo = styled.div`
  padding: 5px 16px;
`

const PostActions = styled.div`
  svg{
    padding: 5px;
  }
`

class Post extends Component {

  render () {
    const { post } = this.props

    const likes = post.likes.reduce((prev, curr, index) => {
      if (index === 0) {
        return `${curr.username}`
      } else if (index === post.likes.length - 1) {
        return `${prev} and ${curr.username}`
      } else {
        return `${prev}, ${curr.username}`
      }
    }, '')
    return (
      <PostContainer>
        <PostUser>
          <img src={post.user.profile_pic} alt={post.user.username} />
          <span>{post.user.username}</span>
        </PostUser>
        <PostContent>
          <img src={post.image.url} />
        </PostContent>
        <PostInfo>
          <p>{post.caption}</p>
          <PostActions>
            <FaHeart size={35} />
            <FaComment size={35} />
          </PostActions>
          <p><strong>{likes}</strong> like this</p>
          {post.comments.map((comment, i) => <Comment key={i} comment={comment}/>)}
        </PostInfo>
      </PostContainer>
    )
  }
}

export default Post
