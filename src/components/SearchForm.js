import React, { useEffect, useRef } from 'react'
import { useGlobalContext } from '../context'


const SearchForm = () => {
  const { setSearchItem } = useGlobalContext();
  const searchValue = useRef('');

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const searchCoffee = () => {
    setSearchItem(searchValue.current.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className="search">
      <form onSubmit={handleSubmit} className="search-form">
        <div className="form-control">
          <label htmlFor="name">Search your favorite Coffee</label>
          <input type="text" name="" id="name" ref={searchValue} onChange={searchCoffee}/>
        </div>
      </form>
    </section>
  )
}

export default SearchForm