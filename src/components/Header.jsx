import React, { useContext } from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import cvImage from '../Images/resume.png';
import  Badge from "../Images/logo.jpeg" 
import "../App.css"
import { TheContext } from '../context/MyContext';


const Header = () => {
   const{dark,handleDark}=useContext(TheContext); 
    const [text] = useTypewriter({
        words: ['Software Engineer', 'Frontend Developer', 'Mobile App Developer', 'Designer'],
        loop: 3,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
      })
    


      const handleDownload = () => {
        const link = document.createElement('a');
        link.href = cvImage;
        link.download = 'your-cv-image.png'; // Change the file name and extension as needed
        link.click();
      };


  return (
    <div className='header' id='header' >
<div className="container" >

   <div className="row ">
    <div className="col-lg-8 col-md-8 col-sm-12  my-5">
<h1 className={dark ? 'p-2 text-light' : 'p-2 '}>
    Hello i'm <strong className='text-primary'>
        Amr Khaled Marey
    </strong>
</h1>
<h2 className={dark ? 'p-2 mt-2 text-light' : 'p-2 mt-2'}>
       I'm a <strong className='text-primary'>
        
        {text}
        </strong> 
      </h2>

      <button onClick={handleDownload} className='btn btn-success  mt-2 p-2 ms-2 text-center btn-lg'>Download My Cv </button> 
      <button onClick={handleDark} className={dark ? 'btn btn-light  mt-2 p-2 ms-2 text-center btn-lg': 'btn btn-dark  mt-2 p-2 ms-2 text-center btn-lg'}>{dark ? 'Light Mode' : 'Dark Mode'} </button> 

    </div>
    <div className="col-lg-4 col-md-4 col-sm-12  my-5 ">
        <img src={Badge} alt={Badge} className='img-fluid' loading='lazy'/>
        </div>
</div>   


   </div>
    </div>
   
  )
}

export default Header