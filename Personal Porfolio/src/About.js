import React from 'react'
import './about.css';
import dal from './images/dalle.png';
import { Link } from 'react-router-dom';
export default function About() {
  return (
    <div className='main1'>
      <ul className='sub2'>
          <Link to="/"><li>HOME</li></Link>
          <Link to={'/About'}><li>ABOUT ME</li></Link>
          <Link to={'/Edu'}><li>EDUCATION</li></Link>
          <Link to={'/Pro'}><li>PROJECTS</li></Link>
          <Link to={'/Cont'}><li>CONTACT</li></Link>
      </ul>
    <div className='Asub3'>
        <img src={dal} alt='' width={600} height={400}/>
        <div className='overlap'>
          <span>The Art of Coding</span><br/>
          Coding The Future , One Line At a Time.<br/>
          Automation: Saves time by automating repetitive tasks.<br/>
          Problem Solving: Enhances logical thinking and problem-solving skills.<br/>
          Innovation: Drives the creation of new technologies and applications.<br/>
          Career Opportunities: Opens up diverse career paths in technology and beyond
        </div>
    </div>
    <div className='Asub4'>
      <span>Passionate about merging creativity with code to build innovative solutions</span>
    </div>
    <div className='Asub5'>
       <h3>MySelf</h3>
       <span></span>
    </div>
    <div className='Asub6'>
      <span>I am currently pursuing a BE in Computer Science at <br/>Sri Krishna College of Engineering and Technology.<br/> 
      Throughout my academic journey, I have developed a <br/>strong foundation in various programming languages and technologies,<br/>
      including C++, Java, React JS, DSA, SQL, testing, AWS basics,<br/> and REST API Spring Boot, which I completed through I am Neo.<br/>
      I have also completed courses in MongoDB and Infosys Springboard,<br/> further enhancing my technical skills.<br/> 
      My hands-on experience includes a project on a food ordering portal, <br/>which allowed me to apply my knowledge in a practical setting.<br/>
      As a former Web Development Intern, I am passionate about <br/>front-end development and continuously seek opportunities to grow and apply<br/> 
      my skills in a full-time role. I am enthusiastic about joining <br/>a dynamic team where I can contribute and further develop my expertise in web development.</span>
    </div>
    </div>
  )
}
