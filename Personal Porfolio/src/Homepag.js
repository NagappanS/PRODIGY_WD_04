import React from 'react'
import './home.css';
import h from './images/img2.png';
import {Link} from 'react-router-dom';
export default function Homepag() {
  return (
    <div className='main1'>
      <div className='sub1'>
        <ul className='sub2'>
            <Link to="/"><li>HOME</li></Link>
            <Link to={'/About'}><li>ABOUT ME</li></Link>
            <Link to={'/Edu'}><li>EDUCATION</li></Link>
            <Link to={'/Pro'}><li>PROJECTS</li></Link>
            <Link to={'/Cont'}><li>CONTACT</li></Link>
        </ul>
      </div>
      <div className='sub3'> 
           <span1>Hey  There ! !</span1>
           <span2>I'm<br/>NAGAPPAN S</span2>
           <span3>Web Developer</span3>
      </div>
      <div className='sub4'>
           <span><p>I'm NAGAPPAN S, a junior web developer driven by a desire to build seamless <br/>and user-friendly web applications. 
            Currently pursuing a BE in Computer Science, 
            <br/>I have gained substantial experience through internships <br/>and job simulations at Prodigy Infotech and JPMorgan Chase & Co. 
            <br/>My portfolio showcases my dedication to continuous learning and my ability to adapt to new technologies. 
            <br/>Let's create something amazing together!</p></span>
      </div>
      <div className='sub5'>
        <img src={h} alt='' width={400} height={400}/>
      </div>
      <div className='sub6'>
        <span>PortfFolio</span>
      </div>
    </div>
  )
}
