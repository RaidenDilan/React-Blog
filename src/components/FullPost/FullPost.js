import React, { Component } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import './FullPost.css';

class FullPost extends Component {
  state = {
    loadedPost: null
  }

  deletePostHandler = () => {
    axios
      .delete('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
      .then(response => console.log('[FullPost.js] deletePostHandler', response));
  }

  componentDidUpdate() {
    if (this.props.id) {
      if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
        axios
          .get('https://jsonplaceholder.typicode.com/posts/' + this.props.id)
          .then(response => {
            this.setState({ loadedPost: response.data });
            // console.log('[FullPost.js] componentDidUpdate', response);
          });
      }
    }
  }

  render () {
    let post = <p style={ { textAlign: 'center' } }>Please select a Post!</p>;

    if (this.props.id) post = <p style={ { textAlign: 'center' } }>Loading...!</p>;

    if (this.state.loadedPost) {
      post = (
        <div className='FullPost'>
          <h1>{ this.state.loadedPost.title }</h1>
          <p>{ this.state.loadedPost.content }</p>
          <div className='Edit'>
            <button
              className='Delete'
              onClick={ () => this.deletePostHandler(this.state.loadedPost.id) }
            >
              Delete
            </button>
          </div>
        </div>
      );
    }

    return post;
  }
}

FullPost.propTypes = {
  id: PropTypes.number
};

export default FullPost;
