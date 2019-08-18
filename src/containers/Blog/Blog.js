import React, { Component } from 'react';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
import NoMatch from './NoMatch/NoMatch';
import asyncComponent from '../../hoc/asyncComponent';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';

const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
});

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = { auth: true };
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
            <Route path="/new-post" component={AsyncNewPost} />
          ) : null}
          <Route path="/posts" component={Posts} />
          {/* <Redirect from="/" exact to="/posts" /> */}
          {/* <Route path="/" component={Posts} /> */}
          {/* 404 route does not work with redirect on the home page well. 
          Best to have only one. */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    );
  }
}

export default Blog;
