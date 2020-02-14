import React, { Component } from 'react';
import axios from '../../../axios';
// import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';

import './Posts.css';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
  state = {
    posts: []
    // selectedPostId: null,
    // error: false
  }

  componentDidMount() {
    // console.log('[Posts.js] componentDidMount : this.props', this.props);

    axios
      .get('/posts')
      .then(response => {
        const posts = response.data.slice(0, 4); // get 1-4 posts.
        const updatedPosts = posts.map(post => {
          // return a new JavaScript Object for each post
          return {
            ...post, // spread/distribute the property of the post
            author: 'Max' // add new author property to the post
          };
        });

        this.setState({ posts: updatedPosts });
        // console.log('[Blog.js] componentDidMount', response);
      })
      .catch(error => {
        console.log('[Blog.js] componentDidMount error', error);
        // this.setState({ error: true });
      });
  }

  postSelectedHandler = (id) => {
    // this.setState({ selectedPostId: id });
    // this.props.history.push({ pathname: '/' + id }); // METHOD 1 - <Route path='/:id' />
    this.props.history.push('/posts/' + id);  // METHOD 2 - <Route path='/posts/:id' />
  }

  render () {
    let posts = <p style={ { textAlign: 'center' } }>Something went wrong!</p>;

    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return (
          // <Link
          //   to={ '/posts/' + post.id }
          //   key={ post.id }>
          <Post
            key={ post.id }
            title={ post.title }
            author={ post.author }
            clicked={ () => this.postSelectedHandler(post.id) } />
          // </Link>
        );
      });
    }

    return (
      <div>
        <section className='Posts'>
          { posts }
        </section>
        <Route
          path={ this.props.match.url + '/:id' }
          exact
          component={ FullPost } />
      </div>
    );
  }
}

export default Posts;
