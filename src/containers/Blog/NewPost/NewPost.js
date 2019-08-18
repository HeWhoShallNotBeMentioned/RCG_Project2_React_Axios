import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './NewPost.css';

class NewPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: '',
      author: 'Monty',
      //submitted: false,
    };
  }
  componentDidMount() {
    console.log(this.props);
  }

  postDataHandler = async () => {
    const post = {
      title: this.state.title,
      body: this.state.content,
      author: this.state.author,
    };
    const postResponse = await axios.post('/posts', post);
    console.log('postResponse xxxxxxxxx ', postResponse);
    //this.setState({ submitted: true });
    this.props.history.push('/posts');
  };

  render() {
    // let redirect = null;
    // if (this.state.submitted) {
    //   redirect = <Redirect to="/posts" />;
    // }
    return (
      <div className="NewPost">
        {/* {redirect} */}
        <h1>Add a Post</h1>
        <label>Title</label>
        <input
          type="text"
          value={this.state.title}
          onChange={event => this.setState({ title: event.target.value })}
        />
        <label>Content</label>
        <textarea
          rows="4"
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
        <label>Author</label>
        <select
          value={this.state.author}
          onChange={event => this.setState({ author: event.target.value })}
        >
          <option value="Monty">Monty</option>
          <option value="Lily">Lily</option>
        </select>
        <button onClick={this.postDataHandler}> Add Post</button>
      </div>
    );
  }
}

export default NewPost;
