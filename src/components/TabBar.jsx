import React from 'react';
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faAddressCard, faBarsProgress, faAddressBook,faMedal } from '@fortawesome/free-solid-svg-icons'; // Correct import

const TabBar = () => {
    window.addEventListener('scroll', function() {
        const tabs = document.querySelector('.tabs');
        if (window.scrollY > 50) {
          tabs.style.bottom = '80px';
        } else {
          tabs.style.bottom = '-100px';
        }
      });
      
  return (
    <div className='tabs'>
      <div className='container'>
        <div className='tab'>
        <a href='#header'>
              <FontAwesomeIcon icon={faHouse} className='icon' name='Home' />
        </a>
        
        </div>
        <div className='tab'>
        <a href='#about'>
 <FontAwesomeIcon icon={faAddressCard} className='icon' name='About'/>
        </a>
         
        </div>
        <div className='tab'>
        <a href='#skills'> 
             <FontAwesomeIcon icon={faMedal} className='icon' name='Skills'/>
        </a>
         
        </div>
        <div className='tab'>
        <a href='#projects'> 
               <FontAwesomeIcon icon={faBarsProgress} className='icon' name='Projects'/>
        </a>
       
        </div>
        <div className='tab'>
        <a href='#contact'> 
              <FontAwesomeIcon icon={faAddressBook} className='icon' name='Contact'/>
        </a>
        
        </div>
      </div>
    </div>
  );
};

export default TabBar;
