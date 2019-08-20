import React, { Component } from 'react'
import Post from './Post'
import FakePost from '../seed/fakePost.js'


class Posts extends Component {
  state = {
    posts: []
  }
  componentWillMount () {
    const posts = []
    for (let i = 0; i < 20; i++) {
      posts.push(new FakePost())
    }
    this.setState({ posts })
  }
  render () {
    return (
      <div>
        {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
      </div>
    )
  }
}

export default Posts
