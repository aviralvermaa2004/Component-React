import React from 'react'
import download from '../assets/download.jpeg'
import "./UserCard.css"
const UserCard = (props) => {
  return (
    <div className='user-container'>    
    <p id='user-title'>{props.name}</p>
    <img id='user-img'src={props.image} alt="Aviral" />
    <p id='user-desc'>{props.desc}</p>
    </div>
  )
}

export default UserCard