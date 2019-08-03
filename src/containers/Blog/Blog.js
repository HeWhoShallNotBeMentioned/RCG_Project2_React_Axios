import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  async componentDidMount() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    this.setState({ posts: data });
    console.log('this.state.posts', this.state.posts);
  }

  render() {
    const posts = this.state.posts.map(post => {
      return <Post key={post.id} title={post.title} author={post.author} />;
    });
    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
