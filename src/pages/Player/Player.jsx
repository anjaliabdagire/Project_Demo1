import React from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
  const {id}= useParams();
  const navigate = useNavigate();
  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="" onClick={()=>{navigate(-2)}}/>
      <iframe width='90%' height='90%' src='https://www.youtube.com/embed/hkHHwA-vEyQ' title='trailer' frameBorder='0' allowFullScreen></iframe>
    <div className="Player-info">
      <p>Published Date</p>
      <p>Name</p>
      <p>Type</p>
    </div>
    </div>
  )
}

export default Player
