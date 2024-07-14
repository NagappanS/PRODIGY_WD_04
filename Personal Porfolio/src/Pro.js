import React from 'react'
import './pro.css';
import Project from './Project';
import { Link } from 'react-router-dom';
export default function Pro() {
  return (
    <div className='main1'>
      <ul className='sub2'>
          <Link to="/"><li>HOME</li></Link>
          <Link to={'/About'}><li>ABOUT ME</li></Link>
          <Link to={'/Edu'}><li>EDUCATION</li></Link>
          <Link to={'/Pro'}><li>PROJECTS</li></Link>
          <Link to={'/Cont'}><li>CONTACT</li></Link>
      </ul>
    <div className='Psub3'>
    <h2>My Experience in Projects</h2>
     <Project/>
    </div>
    </div>
  )
}
