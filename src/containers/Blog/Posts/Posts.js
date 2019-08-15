import React, { Component } from 'react';
import axios from '../../../axios';
import { Link } from 'react-router-dom';
import './Posts.css';

import Post from '../../../components/Post/Post';
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  async componentDidMount() {
    console.log('this.props---------------', this.props);
    try {
      const { data } = await axios.get('/posts');
      const postsSliced = data.slice(0, 4);
      const updatedPosts = postsSliced.map(post => {
        return {
          ...post,
          author: 'Monty',
        };
      });

      this.setState({ posts: updatedPosts });
    } catch (error) {
      console.log('error', error);
    }
  }

  postSelectedHandler = id => {
    this.setState({ selectedPostId: id });
  };

  render() {
    let posts = <p style={{ textAlign: 'center' }}>Something went wrong </p>;
    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          <Link to={'/' + post.id} key={post.id}>
            <Post
              title={post.title}
              author={post.author}
              clicked={() => this.postSelectedHandler(post.id)}
            />
          </Link>
        );
      });
    }

    return <section className="Posts">{posts}</section>;
  }
}

export default Posts;
