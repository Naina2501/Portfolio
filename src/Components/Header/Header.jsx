import React, { useRef } from "react";
import {Container} from '../index'
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className=" text-white py-5 @container">
    <Container>
    <div className="container mx-auto flex justify-between items-center">
    <div className="bg-clip-text flex justify-around text-3xl font-bold "><img src="https://cdn3.iconfinder.com/data/icons/users-6/100/women-computer-512.png" className="w-10 h-10"></img><span>Naina Bahuriya</span> </div>
      <nav className="hidden md:flex space-x-4 text-lg hover:scale-110 transition-transform duration-300">
        <Link to="/" >Home</Link>
        <Link to="/Projects" >Projects</Link>
        <Link to="/Skills" >Skills</Link>
        <Link to="/Contactus" >Contact</Link>
    
      </nav>
      <button className="md:hidden text-white focus:outline-none" >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
      
     
    
    </div>
    <div className="md:hidden ">
      
      <a href="#" className="block text-white py-2 px-4 hover:bg-blue-700">Home</a>
      <a href="#" className="block text-white py-2 px-4 hover:bg-blue-700">About</a>
      <a href="#" className="block text-white py-2 px-4 hover:bg-blue-700">Services</a>
      <a href="#" className="block text-white py-2 px-4 hover:bg-blue-700">Contact</a>
   
      
    </div>
    

    </Container>
    </header>
  );
};

export default Header;
