import { ExternalLink,Github } from "lucide-react";

const Projects = ({image,title,description,tools,demoLink,githubLink}) =>{
   return(
    <div className="border border-gray-300 rounded-md w-87.5 h-110">
       <img src={image} alt={title} className="w-full h-40 object-cover rounded-md mb-3"/>
       <div className="p-4">
           <h3 className="font-heading text-[1.2rem] mb-2">{title}</h3>
           <p className="mb-5">{description}</p>
           <div className="mb-5">
            {tools.map((tool,index)=>(
                <span key={index} className="bg-gray-200 p-2 rounded-md text-black mr-2">
                    {tool}
                </span>
            ))}
           </div>
           <div className="flex gap-4">
            <a 
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center p-2 rounded-md text-white bg-black cursor-pointer">
                <ExternalLink/>&nbsp;
                Live Demo
            </a>
            <a 
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center p-2 rounded-md text-black border border-gray-400 cursor-pointer">
                <Github/>&nbsp; 
                Code
            </a>
           </div>
       </div>
    </div>
   )
}

export default Projects;