import React from 'react'
import './card.css'
export default function Card(props) {
  const profile=props.profile
  return (
    <div>
       
        
        <div className='Profile-details'>
            <img src={profile.avatar_url} alt={profile.login}/>
            <div className='profile-data'>
                <h3>UserName:{profile.login}</h3>
                <h3>ID: {profile.id}</h3>
                <a href={profile.html_url} target='_blank'>See Details</a>

            </div>
        </div>
      
    </div>
  )
}
