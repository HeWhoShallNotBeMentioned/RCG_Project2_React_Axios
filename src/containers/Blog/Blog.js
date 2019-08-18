import React, { Component } from 'react';
import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = { auth: false };
  }

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  activeClassName="my-active"
                  activeStyle={{ textDecoration: 'underline' }}
                  exact
                  to="/posts"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/new-post">New Post</NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          {/* <Route path="/" exact render={() => <Posts />} /> */}
          {this.state.auth ? (
            <Route path="/new-post" component={NewPost} />
          ) : (
            <div style={{ color: 'red', textAlign: 'center' }}>
              Not Authorized
            </div>
          )}
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts" />
          {/* <Route path="/" component={Posts} /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
