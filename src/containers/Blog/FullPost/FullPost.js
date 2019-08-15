import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadedPost: null,
    };
  }
  async componentDidMount() {
    console.log('FullPost props=======', this.props.match.params.id);
    if (this.props.match.params.id > 0) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)
      ) {
        const { data } = await axios.get(
          '/posts/' + this.props.match.params.id
        );
        this.setState({ loadedPost: data });
        console.log('post+++++++++++++++++', data);
      }
    }
  }

  deletePostHandler = async () => {
    const deletedResponse = await axios.delete('/posts/' + this.props.id);
    console.log('deletedResponse  ------------', deletedResponse);
  };

  render() {
    console.log('state', this.state);
    let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
    if (this.props.id) {
      post = <p style={{ textAlign: 'center' }}>Loading.......</p>;
    }

    if (this.props.match.params.id && this.state.loadedPost) {
      post = (
        <div className="FullPost">
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}t</p>
          <div className="Edit">
            <button className="Delete" onClick={this.deletePostHandler}>
              Delete
            </button>
          </div>
        </div>
      );
    }
    return post;
  }
}

export default FullPost;
