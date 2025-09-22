import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
export default function CardList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://api.github.com/users')
      .then((response) => {
        setUsers(response.data);
        setLoading(false);
      });
     
  }, []);
  
  return(
    
    <>{users.map((profile)=>
        <div className='Profile-details'>
            <img src={profile.avatar_url} alt={profile.login}/>
            <div className='profile-data'>
                <h3>UserName:{profile.login}</h3>
                <h3>ID: {profile.id}</h3>
                <a href={profile.html_url} target='_blank'>See Details</a>

            </div>
        </div>
        )}</>
    
    
  )}