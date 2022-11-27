import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

export const SearchBar = ({posts, setSearchResults}) => {

  const handleSubmit = (e) => e.preventDefault();

  const handleSearchChange = (e) => {
    //if input is empty or we clear the search -->  return original posts/data on page
    if (!e.target.value) return setSearchResults(posts)

      // original data filtered to find by 'title' or (||) text 'body' in post
      const resultsArray = posts.filter(post => post.title.includes(e.target.value) || post.body.includes(e.target.value))

      setSearchResults(resultsArray);
  }

  return (
    <div className='search-class'>
        <header>
            <form action='search' onSubmit={handleSubmit}>
    	          <input className='search__input'
                  type='text'
                  id='search'
                  onChange={handleSearchChange} 
                />
                <button className='search__button'>
                  <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </form>
        </header>
    </div>
  )
}
//10.58 min