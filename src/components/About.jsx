import React, { useContext } from 'react'
import '../App.css';
import  Badge from "../Images/logo.jpeg" 
import { TheContext } from '../context/MyContext';

const About = () => {
    const{dark}=useContext(TheContext);
  return (
    <div className='about' id='about'>

        <div className='container '>
      
<div className='aboutsec'>
<img src={Badge} alt={Badge} className='img-fluid' loading='lazy'/>

</div>
<div className='aboutsec'>
<p className={dark ? 'text-light' : 'text-dark'}>
As a Software Engineer , my expertise encompasses creating dynamic web applications and mobile solutions, leveraging the power of frameworks like React, Vue.js, and Flutter. Our team consistently delivers robust and scalable platforms, with a keen eye for renewability and efficient tool integration.

Currently advancing my B.Sc. in Software Engineering, I am honing my skills in Python, C++, and embedded system programming, complemented by a proficiency in graphic design. My certifications from AMIT Learning and Microsoft underpin a commitment to continuous growth and innovation within the tech industry.
</p>
<a href='#contact'>
<button  className='btn btn-success  mt-2 p-2 ms-2 text-center btn-lg'>Contact Me </button> 

</a>
</div>
        </div>
    </div>
  )
}

export default About