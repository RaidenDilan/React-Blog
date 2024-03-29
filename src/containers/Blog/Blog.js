import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost';

// lazy loading
const AsyncNewPost = asyncComponent(() => {
  return import('./NewPost/NewPost');
});

class Blog extends Component {
  state = {
    auth: true // working with guards
  }

  render () {
    return (
      <div className='Blog'>
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to='/posts'
                  exact
                  activeClassName='my-active'
                  activeStyle={ { color: '#FA923F', textDecoration: 'underline' } }>
                  Posts
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={ {
                    pathname: '/new-post',
                    hash: '#submit',
                    search: '?quick-submit=true'
                  } }>
                  New Post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        { /* <Route path='/' exact render={ () => <h1>Home 1</h1> } />
        <Route path='/' render={ () => <h1>Home 2</h1> } />*/ }
        <Switch>
          { this.state.auth ? <Route
            path='/new-post'
            component={ AsyncNewPost } /> : null }
          <Route
            path='/posts'
            component={ Posts } />
          <Route render={ () => <h1>Not found</h1> } />
          { /* <Route path='/posts' component={ Posts } /> */ }
          { /* <Redirect from='/' to='/posts' /> */ }
        </Switch>
      </div>
    );
  }
}

export default Blog;
