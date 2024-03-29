import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
  state = {
    loadedPost: null
  }

  componentDidMount() {
    console.log('[FullPost.js] componentDidMount', this.props);
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  loadData() {
    if (this.props.match.params.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.id !== +this.props.match.params.id // != We just just for the value not the prop type // We can also add a + infront of 'this.props.match.params.id' to covert it to a number
        )
      ) {
        axios
          .get('/posts/' + this.props.match.params.id)
          .then(response => {
            this.setState({ loadedPost: response.data });
            console.log('[FullPost.js] componentDidUpdate', response);
          });
      }
    }
  }

  deletePostHandler = () => {
    axios
      .delete('/posts/' + this.props.match.params.id)
      .then(response => console.log('[FullPost.js] deletePostHandler', response));
  }

  render () {
    let post = <p style={ { textAlign: 'center' } }>Please select a Post!</p>;

    if (this.props.match.params.id) post = <p style={ { textAlign: 'center' } }>Loading...!</p>;

    if (this.state.loadedPost) {
      post = (
        <div className='FullPost'>
          <h1>{ this.state.loadedPost.title }</h1>
          <p>{ this.state.loadedPost.body }</p>
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

export default FullPost;
