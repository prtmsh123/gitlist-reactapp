import React, { useState } from 'react'

export default function SearchForm({onSearch}) {
    const [query, setQuery] = useState('');

    const handleSubmit=(e)=>{
        e.preventDefault()
        
        onSearch(query); //passing query to app.jsx
            

    }
    
    const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    // call onSearch with empty string when input cleared
    if(value.trim()===''){   // its romeve white space
      onSearch('');
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type='text' placeholder='Search User' value={query} onChange={handleChange}  />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}
