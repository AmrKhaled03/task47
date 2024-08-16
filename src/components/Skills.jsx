import React from 'react'
import "../App.css"
const Skills = () => {
    const skills=[

        {
          id:0,
          name:"html",
          img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        },
        {
          id:1,
          name:"css",
          img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
        },
        {
          id:2,
          name:"js",
          img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" 
        },
        {
          id:3,
          name:"react",
          img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
        },
        {
          id:4,
          name:"vue",
          img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original-wordmark.svg"
        },
        {
          id:5,
          name:"bootstarp",
          img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original-wordmark.svg"
        },
        {
          id:6,
          name:"php",
          img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
        },
        {
          id:7,
          name:"laravel",
         img:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original-wordmark.svg"
        },
        {
          id:8,
          name:"node",
          img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg" 
        },
        {
          id:9,
          name:"cpp",
          img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
        },
        {
          id:10,
          name:"python",
          img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg"
        },
        {
          id:11,
          name:"arduino",
          img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original-wordmark.svg"
        },
      {
        id:12,
        name:"dart",
        img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original-wordmark.svg"
      },
      {
        id:13,
        name:"flutter",
        img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
      },
      {
        id:14,
        name:"react-native",
        img:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
      }
    
      ]
      return (
        <div className='skills' id='skills'>
          <div className='container'>
            <div className='row fadeInRight'>
              {skills.length === 0 ? (
                <h1>No Skills Found</h1>
              ) : (
                skills.map((skill) => (
                  <div className='col-lg-4 col-md-6 col-sm-6 ' key={skill.id}>
                    <img 
                      src={skill.img} 
                      alt={skill.name} 
                      className='img-fluid m-2' 
                      loading='lazy' 
                    />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      );
    };
    
    export default Skills;