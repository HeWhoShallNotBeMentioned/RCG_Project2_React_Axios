import React, { Component } from 'react';
//import axios from 'axios';
import axios from '../../axios';

import './Blog.css';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], selectedPostId: null, error: false };
  }

  async componentDidMount() {
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
      console.log('data', data);
    } catch (error) {
      this.setState({ error: true });
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
          <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        );
      });
    }
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/new-post">New Post</a>
              </li>
            </ul>
          </nav>
        </header>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
