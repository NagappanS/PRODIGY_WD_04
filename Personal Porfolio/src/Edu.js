import React from 'react'
import './edu.css';
import { Link } from 'react-router-dom';
import { FaCode, FaJava, FaReact, FaDatabase, FaBug, FaAws, FaNetworkWired ,FaUniversity} from 'react-icons/fa';
import { SiSpring } from 'react-icons/si';
import s from './images/lisieux.png';
import b from './images/banner.png';
export default function Edu() {
  return (
    <div className='main1'>
      <ul className='sub2'>
          <Link to="/"><li>HOME</li></Link>
          <Link to={'/About'}><li>ABOUT ME</li></Link>
          <Link to={'/Edu'}><li>EDUCATION</li></Link>
          <Link to={'/Pro'}><li>PROJECTS</li></Link>
          <Link to={'/Cont'}><li>CONTACT</li></Link>
      </ul>
      <div className='education-section'>
        <h2>Education</h2>
        <div className='education-item'>
          <img src={s} alt='' width={40} height={50}/>
          <h3>Lisieux Matriculation Higher Secondary School</h3>
          <p>Computer Science | 95% (12th) | 2022</p>
        </div>
        <div className='education-item'>
        <FaUniversity className='icon university' size={30}/>
          <h3>Sri Krishna College of Engineering and Technology</h3>
          <p>B.E CSE | CGPA - 8.26 | 2026</p>
        </div>
      </div>
      <div className='skills-section'>
        <h2>Skills</h2>
        <ul className='skills-list'>
        <li><FaCode className='icon cplus' /> C++</li>
          <li><FaJava className='icon java' /> Java</li>
          <li><FaReact className='icon react' /> React JS</li>
          <li><FaNetworkWired className='icon dsa' /> Data Structures and Algorithms (DSA)</li>
          <li><FaDatabase className='icon sql' /> SQL</li>
          <li><FaBug className='icon testing' /> Testing</li>
          <li><FaAws className='icon aws' /> AWS</li>
          <li><SiSpring className='icon spring' /> REST API Spring Boot</li>
        </ul>
      </div>
      <div className='S'>2008</div>
      <div className='E'>2026</div>
      <img src={b} alt='' width={900} height={150} className='i'/> 
    </div>
  )
}
