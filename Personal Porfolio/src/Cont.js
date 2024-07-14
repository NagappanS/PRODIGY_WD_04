import React from 'react'
import './cont.css';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import XIcon from '@mui/icons-material/X';
import { Mail } from 'lucide-react';
import { Phone } from 'lucide-react';
export default function Cont() {
  return (
    <div className='main1'>
      <ul className='sub2'>
          <Link to="/"><li>HOME</li></Link>
          <Link to={'/About'}><li>ABOUT ME</li></Link>
          <Link to={'/Edu'}><li>EDUCATION</li></Link>
          <Link to={'/Pro'}><li>PROJECTS</li></Link>
          <Link to={'/Cont'}><li>CONTACT</li></Link>
      </ul>
    <div className='Csub3'>
        <h2>Stay Connected</h2>
           <div className='contact-icons'>
              <a href="https://github.com/NagappanS" target="_blank" rel="noopener noreferrer" className='icon gi'>
            <FaGithub /><span>GitHub</span>
              </a>
             <a href="https://www.linkedin.com/in/nagappan-s-84a9ab255/" target="_blank" rel="noopener noreferrer" className='icon liin'>
            <FaLinkedin /><span>Linkedin</span>
              </a>
             <a href="https://twitter.com/NagappanSabari" target="_blank" rel="noopener noreferrer" className='icon twi'>
            <XIcon /><span>Twitter</span>
              </a>
             <a href="https://www.instagram.com//_s.a.b.a.r.i_s_/" target="_blank" rel="noopener noreferrer" className='icon ins'>
            <FaInstagram /><span>Instagram</span>
              </a>
           </div>
    </div>
    <div className='Csub4'>
           <span><Mail/></span> 
           <span1>nagappansabari824@gmail.com</span1>
           <span2><Phone/></span2> 
           <span3>8667496870</span3>
    </div>
    <div className='Line'>
      <span>NAGAPPAN S</span>
    </div>
    <div className='Bline'>
      <span1>PortfFolio</span1>
    </div>
    <div className='Aline'></div>
    </div>
  )
}
