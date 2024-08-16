import React, { useContext } from 'react';
import './App.css';
import Header from './components/Header';
import TabBar from './components/TabBar';
import  { TheContext } from './context/MyContext';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { dark } = useContext(TheContext);
if(dark){
  document.body.classList.add("active");
}else{
  document.body.classList.remove("active");

}
  return (
   
    <div>
        <TabBar />
        <Header />
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
      </div>
   
  );
}

export default App;
