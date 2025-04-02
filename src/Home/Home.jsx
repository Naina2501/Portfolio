import React from 'react';
import { Contactus, Container } from '../Components';
import {Projects,Skills} from "../Components"
import {AboutUs} from "../Components"
function Home() {
    return (
        <div className='w-full py-8 '>
         <Container>

         <div class="grid grid-cols-2 gap-4">
            <div>
                <div >
                    <div className="wrapper "> 
                        <div className="static-txt text-primary ms-14 ">Hello. <br></br><span className='text-white shadow-pink-100 text-5xl ms-7'> I'm Naina </span></div>
                        <ul className="dynamic-txts  ">
                        <li><span>FULLSTACK-DEVELOPER</span></li>
                        <li><span>WEB-DEVELOPER</span></li>
                        <li><span>FRONTEND DEVELOPER</span></li>
                        <li><span>BACKEND DEVELOPER</span></li>
                        </ul>
                    </div>
                
                    <p className='text-left ms-7 mt-4 text-lg font-sans'>
                    Hi! I'm <strong>Naina Bahuriya</strong>, a passionate web developer with a knack for building efficient, user-friendly, and visually appealing websites.
                    I specialize in front-end and back-end development, turning creative ideas into functional digital solutions.
                </p> 
                <div className="flex justify-center gap-4 mt-15">
                    <button  className="w-100 text-lg bg-blue-400 p-3 rounded-2xl hover:bg-blue-300 hover:w-103"> About-us</button>
                    <button href="/public/docs/nainabahuriyaresume.pdf" className="w-100 text-lg bg-blue-400 p-3 rounded-2xl hover:bg-blue-300 hover:w-103"  download="resume">Resume</button>
                    </div>
                    </div></div>
            <div >
             <div>
                <div className="images-container">
                <div className="image-container">
                    <img className="manzdev" src="https://img.freepik.com/premium-photo/female-developer-background_665280-9657.jpg" alt="ManzDev"/>
                    <div className="gradient"></div>
                </div>
            
            </div>
            </div>
            </div>
  
</div>
     
       
       
<Skills/>
 <Projects/>
 <AboutUs/>
       <Contactus/>
            </Container>
           
        </div>
    );
}

export default Home;