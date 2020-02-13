import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './Post.css';

const post = (props) => {
  console.log('[Post.js] props', props);

  return (
    <article
      className='Post'
      onClick={ props.clicked }
    >
      <h1>{ props.title }</h1>
      <div className='Info'>
        <div className='Author'>{ props.author }</div>
      </div>
    </article>
  );
};

post.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  clicked: PropTypes.func.isRequired
};

// withRouter passes ...this.props to our post component. In this case we can see our router history, location, match, etc
export default withRouter(post);
