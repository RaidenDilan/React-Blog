import React, { Component } from 'react';
import axios from '../../../axios';

import './Posts.css';
import Post from '../../../components/Post/Post';

class Posts extends Component {
  state = {
    posts: []
    // selectedPostId: null,
    // error: false
  }

  componentDidMount() {
    console.log('[Posts.js] this.props', this.props);
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
    this.setState({ selectedPostId: id });
  }

  render () {
    let posts = <p style={ { textAlign: 'center' } }>Something went wrong!</p>;

    if (!this.state.error) {
      posts = this.state.posts.map(post => {
        return <Post
          title={ post.title }
          author={ post.author }
          key={ post.id }
          clicked={ () => this.postSelectedHandler(post.id) }
        />;
      });
    }

    return (
      <section className='Posts'>
        { posts }
      </section>
    );
  }
}

export default Posts;
