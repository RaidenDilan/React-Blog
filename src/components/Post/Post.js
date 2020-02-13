import React from 'react';
import { withRouter } from 'react-router-dom';

import './Post.css';

const post = (props) => {
  // console.log('[Post.js] props', props);

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

// withRouter passes ...this.props to our post component. In this case we can see our router history, location, match, etc
export default withRouter(post);
