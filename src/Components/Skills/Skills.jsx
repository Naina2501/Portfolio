import React from 'react';
import Container from '../Container/Container';

function Skills() {

    const skills = [
        { name: 'HTML', level: 'Advanced' },
        { name: 'CSS', level: 'Advanced' },
        { name: 'JavaScript', level: 'Advanced' },
        { name: 'React', level: 'Intermediate' },
        { name: 'Node.js', level: 'Intermediate' },
        { name: 'Mongodb', level: 'Intermediate' },
        { name: 'Python', level: 'Beginner' },
      ];
    
    return (
        <div className='mt-2'>
        <Container>
        <h2 className='text-white text-4xl Subtitle '>My-Skills</h2>
        <div class="grid grid-flow-col grid-rows gap-5 mt-5">
            <div class=" ">
            <div className='w-120'>
                        <p></p>
                        <p>
                            Here are some of the technical skills I bring to the table:
                        </p>
                        <ul style={{ listStyleType: 'none', padding: '0' }}>
                            {skills.map((skill, index) => (
                            <li
                                key={index}
                                style={{
                                background: '#f4f4f4',
                                margin: '10px 0',
                                padding: '10px',
                                borderRadius: '8px',
                                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                                }}
                            >
                                <strong>{skill.name}</strong> - {skill.level}
                            </li>
                            ))}
                        </ul>
                        </div>
            </div>
            <div className=" mt-8 ">
                <img src="https://static.vecteezy.com/system/resources/thumbnails/029/711/176/small_2x/developer-with-ai-generated-free-png.png" className='rounded-2xl h-90  animate-bounce'></img>
            </div>
         
       </div>

             
        <div className="overflow-hidden  mb-4 mt-15">
                <div className=" flex gap-3 items-center ">
                    <div className="px-4 py-2  text-white rounded w-100 "><img src='https://th.bing.com/th/id/OIP.QdIrCNdF2ZVylABjjes1LAHaGq?rs=1&pid=ImgDetMain' className='Card-image'></img></div>
                    <div className="px-4 py-2  text-white rounded w-100 "><img src='https://www.global-itech.com/wp-content/uploads/2020/04/javaScriptIcon-768x870.jpeg'  className='Card-image'></img></div>
                    <div className="px-4 py-2  text-white rounded w-100 "><img src='https://ehaboo.github.io/my-resume/assets/images/Bootstrap-img.png'  className='Card-image'></img></div>
                    <div className="px-4 py-2  text-black rounded w-100 "><img src='https://miro.medium.com/v2/resize:fit:1358/1*ilpNp1r9BPt59xVsnuOb9A.jpeg'  className='Card-image'></img></div>
                    <div className="px-4 py-2  text-white rounded w-100 "><img src='https://th.bing.com/th/id/OIP.oC5OX51VEtYCxOuzNK0kUQHaEo?rs=1&pid=ImgDetMain'  className='Card-image'></img></div>
                    <div className="px-4 py-2  text-white rounded w-100 "><img  className='Card-image' src='data:image/jpeg;base64,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'></img></div>
                    <div className="px-4 py-2  text-white rounded w-100 "><img src='https://th.bing.com/th/id/OIP.GQNP3q3y11NkTM9zXDrkJwHaKY?rs=1&pid=ImgDetMain'  className='Card-image'></img></div>
                    <div className="px-4 py-2  text-white rounded w-100 "><img src='https://th.bing.com/th/id/OIP.qmiB0BOuhQOAtDcEW3wDsQHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'  className='Card-image'></img></div>
                    <div className="px-4 py-2  text-white rounded w-100 "><img src='https://th.bing.com/th/id/OIP.jrcuppJ7JfrVrpa9iKnnnAHaHa?rs=1&pid=ImgDetMain'  className='Card-image'></img></div>
                    <div className="px-4 py-2 text-white rounded w-100 "><img src='https://th.bing.com/th?q=TypeScript+Official+Icon&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247'  className='Card-image'></img></div>
                </div>
                </div>
                
         
            </Container>

           
        
            

        </div>
    );
}

export default Skills;            