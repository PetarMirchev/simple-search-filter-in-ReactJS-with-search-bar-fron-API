import React from 'react';
import Post from './Post';

const ListPage = ({searchResults}) => {

    const results = searchResults.map(post => <Post key={post.id} post={post} />);

    // return the content -> 1 check is some kind of result -> no result, display message 'no data'
    const content = results?.length ? results : <article><p>No Matching Posts to your Search!</p></article>

  return (
    <div className='text-content'>{content}</div>
  )
}

export default ListPage