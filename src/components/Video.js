import React from 'react'
import {Link} from 'react-router-dom'
import SpaceVideo from '../assets/space.mp4'
import './Video.css'

const Video = () => {
  return (
    <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={SpaceVideo} type='video/mp4' />
        </video>

        <div className="content">
            <h1>Galaxy Travel</h1>
            <p>A világ első civil űrutazás szervezője.</p>
            <div>
                <Link to='/training' className='btn'>Képzés</Link>
                <Link to='/contact' className='btn btn-light'>Kilövés</Link>
            </div>
        </div>
    </div>
  )
}

export default Video