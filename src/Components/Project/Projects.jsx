import React from 'react';
import Container from '../Container/Container';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Projects() {
    const projects = [
        {
          id: 1,
          name: "Simple Calculator",
          language: "Html,css,Javascript",
          src: "https://www.simplilearn.com/ice9/free_resources_article_thumb/JavaScript_Calculator.PNG",
          alt: "Premium leather watch with gold accents"
        },
        {
          id: 2,
          name: "Convert Num to word",
         language: "Html,css,Javascript",
          src: "https://i.ytimg.com/vi/rfvl5v89LaI/maxresdefault.jpg",
          alt: "White wireless earbuds in charging case"
        },
        {
          id: 3,
          name: "TODO-REACT",
         language: "React ",
          src: "https://cdn.dribbble.com/users/4039378/screenshots/20018626/media/f2a7ecb0209bee95051656f350961291.jpg?resize=800x600&vertical=center",
          alt: "Aluminum laptop stand"
        },
        {
          id: 4,
          name: "Videolibrary",
         language: "React",
          src: "https://th.bing.com/th/id/OIP.58CQeICBTm-AJiEYIWyiEAHaDf?rs=1&pid=ImgDetMain",
          alt: "RGB mechanical keyboard"
        },
        {
            id: 5,
            name: "Simple Calculator",
            language: "Html,css,Javascript",
            src: "https://www.simplilearn.com/ice9/free_resources_article_thumb/JavaScript_Calculator.PNG",
            alt: "Premium leather watch with gold accents"
       },
          {
            id: 6,
            name: "Simple Calculator",
            language: "Html,css,Javascript",
            src: "https://www.simplilearn.com/ice9/free_resources_article_thumb/JavaScript_Calculator.PNG",
            alt: "Premium leather watch with gold accents"
          },
          {
            id: 7,
            name: "Simple Calculator",
            language: "Html,css,Javascript",
            src: "https://www.simplilearn.com/ice9/free_resources_article_thumb/JavaScript_Calculator.PNG",
            alt: "Premium leather watch with gold accents"
          },
          {
            id: 8,
            name: "Simple Calculator",
            language: "Html,css,Javascript",
            src: "https://www.simplilearn.com/ice9/free_resources_article_thumb/JavaScript_Calculator.PNG",
            alt: "Premium leather watch with gold accents"
          },
      ];
    return (

        <div className="projects mt-3">
           <Container>
           <div className="container mx-auto px-4 py-4">

        <h2 className='font-bold text-3xl mb-10 text-white Subtitle'>ℙ𝕣𝕠𝕛𝕖𝕔𝕥𝕤</h2>
        <div class="grid grid-cols-4 gap-4">
      <div>
          <ul className="mt-32">
          <li className=" text-2xl p-4 hover:text-pink-500"><FaSquareInstagram /></li>
          <li className=" text-2xl p-4  hover:text-white"><FaGithub /></li>
          <li className=" text-2xl p-4  hover:text-blue-300"><FaLinkedin  /></li>
          </ul>
  </div>
  <div> <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-230">
       
       {projects.map((project) => (
         <div key={project.id} className="bg-gray-500 rounded-lg shadow-md overflow-hidden">
           <img
             src={project.src}
             alt={project.alt}
             className="w-full h-48 object-cover"
           />
           <div className="p-4">
             <h3 className="text-lg font-semibold">{project.name}</h3>
             <p className="text-gray-900">{project.language}</p>
           </div>
         </div>
       ))}
     </div>
   </div>
   </div>
</div>
        
    
            </Container>
        </div>
    );
}

export default Projects;