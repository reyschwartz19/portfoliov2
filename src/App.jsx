import {Github,Linkedin,Mail,Menu,X} from 'lucide-react';
import { useState } from 'react';
import Skills from './components/skills';
import Projects from './components/projects';

import animeProjectImg from './assets/anime-project.png';

function App() {
  
    const [open,setOpen] = useState(false);
    

    const toggleMenu = () => {
      setOpen(prev => !prev);
    }

    const year = new Date().getFullYear();
    

  return (
   <main className='bg-primary text-secondary pb-10 pt-20 sm:pt-24 overflow-x-hidden'>
     <header className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-5 py-4 border-b border-gray-300 bg-primary/90 md:px-40">
  <span className="font-heading text-3xl">nrn.</span>

  <button onClick={toggleMenu} className="sm:hidden">
    {open ? <X /> : <Menu />}
  </button>

  <nav
    className={`
      absolute top-full left-0 w-full bg-primary/90
      flex flex-col gap-4 px-5 py-4 max-h-[60vh] overflow-auto
      ${open ? 'block' : 'hidden'}
      sm:static sm:flex sm:flex-row sm:gap-5 sm:p-0 sm:w-auto
    `}
  >
    <a className="font-primary hover:cursor-pointer" href='#home'>Home</a>
    <a className="font-primary hover:cursor-pointer" href='#skills'>Skills</a>
    <a className="font-primary hover:cursor-pointer" href='#projects'>Projects</a>
    <a className="font-primary hover:cursor-pointer" href='#contact'>Contact</a>
  </nav>
</header>

    <section 
    className='flex min-h-screen flex-col items-center text-center px-10 justify-center font-primary text-secondary
         sm:px-40'
    id='home'>
      <p className='font-heading text-4xl mb-3 text-black'>Njong Remy Nga'i</p>
      <p className='text-2xl mb-5'>Front End Developer</p>
      <p>Driven by problem solving and clarity of execution.
        Focused on turning complex ideas into intuitive,
        responsive interfaces with careful attention to usability, performance, 
        and visual balance. Dedicated to building digital experiences that feel purposeful, polished, and reliable.
      </p>
      <div className='flex gap-4 mt-7 mb-7'>
        <a 
          className='border border-gray-300 p-2 w-30 rounded-md cursor-pointer'
          href='#projects'>
            View Projects
        </a>
        <a 
          className='border border-gray-300 p-2 w-30 rounded-md'
          href='#contact'>
          Contact me
        </a>
      </div>
      {/* <div className='flex gap-4'>
        <Github/>
        <Linkedin/>
        <Mail/>
      </div> */}
     </section>

     <section className='px-5 mb-15'
     id='skills'>
      <h2 className='font-heading text-2xl mb-5 text-center'>Skills and technologies</h2>
      <Skills
      title="Languages, Frameworks and Libraries"
      items={['JavaScript','React','Tailwind CSS','Typescript']}
      />
       <Skills
      title="Baas Tools"
      items={['Supabase','Firebase']}
      />
       <Skills
      title="Ai Developer Tools"
      items={['Google Ai studio','Antigravity','Cursor']}
      />
     </section>

     <section className='px-5 mb-15'
     id='projects'>
      <h2 className='font-heading text-2xl mb-5 text-center'>Projects</h2>
      <div className='flex flex-col gap-5 w-full items-center sm:flex-row sm:flex-wrap sm:justify-center'>
        <Projects
        image={animeProjectImg}
        title="Anime Checklist"
        description="A smart anime tracker powered by Gemini AI and Firebase"
        tools={['React','Tailwind CSS','Firebase']}
        githubLink={'https://github.com/reyschwartz19/Anime-watchlist'}
        demoLink={'https://anime-watchlist-one.vercel.app/#/auth'}
        />
        
      
        
      </div>
     </section>

     <section className='px-5'
     id='contact'>
      <h2 className='font-heading text-2xl mb-5 text-center'>Contact Me</h2>
      <p className='text-center mb-5'>Looking for a frontend developer to bring your ideas to live? Reach out so we can turn those ideas to reality</p>
      <div className='flex flex-col w-full sm:flex-row sm:gap-4 sm:justify-center'>
       
        <a 
          href="mailto:njongremy30@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className='cursor-pointer'
        >
          <div className='flex flex-col items-center border border-gray-300 rounded-md p-5 mb-5 sm:w-50 sm:h-35'>
            <Mail className='mb-3 w-5'/>
            <p className='mb-1 text-[0.8rem]'>Email</p>
            <p className='text-black text-[0.8rem]'>njongremy30@gmail.com</p>
          </div>
        </a>
       
        <a 
          href="https://github.com/reyschwartz19"
          target="_blank"
          rel="noopener noreferrer"
          className='cursor-pointer'
        >
          <div className='flex flex-col items-center border border-gray-300 rounded-md p-5 mb-5 sm:w-50 sm:h-35'>
            <Github className='mb-3 w-5'/>
            <p className='mb-1 text-[0.8rem]'>Github</p>
            <p className='text-black text-[0.8rem]'>github.com/reyschwartz19</p>
          </div>
        </a>
       
        <a
          href="https://www.linkedin.com/in/njong-remy-nga-i-bb7690343/"
          target="_blank"
          rel="noopener noreferrer"
          className='cursor-pointer'
        >
          <div className='flex flex-col items-center border border-gray-300 rounded-md p-5 mb-5 sm:w-50 sm:h-35'>
            <Linkedin className='mb-3 w-5'/>
            <p className='mb-1 text-[0.8rem]'>Linkedin</p>
            <a className='text-black text-[0.8rem] text-center'>
              www.linkedin.com/in/njong-remy-nga-i-bb7690343
            </a>
          </div>
        </a>
      </div>
     </section>

     <footer className='border-t border-t-gray-300 p-5 flex flex-col items-center'>
    
       <p className='text-black text-[0.8rem]'>Njong Remy Nga'i</p>
       <p className='text-[0.7rem] mb-5'>Frontend Developer</p>
       <p className='text-[0.7rem]'>&copy; {year} Njong Remy. Built with React and Tailwind</p>
     </footer>

   </main>
  )
}

export default App
