import {Github,Linkedin,Mail,Menu,X} from 'lucide-react';
import { useState } from 'react';

function App() {
  
    const [open,isOpen] = useState(false);

    const toggleMenu = () => {
      isOpen(prev=>!prev);
    }

  return (
   <main className='bg-primary'>
     <header className="flex items-center justify-between px-40 py-4 border-b border-gray-300 bg-primary w-full absolute max-sm:px-5">
  <span className="font-heading text-3xl">nrn.</span>

  <button onClick={toggleMenu} className="sm:hidden">
    {open ? <X /> : <Menu />}
  </button>

  <nav
    className={`
      absolute top-full left-0 w-full bg-primary
      flex flex-col gap-4 px-5 py-4
      ${open ? 'block' : 'hidden'}
      sm:static sm:flex sm:flex-row sm:gap-5 sm:p-0 sm:w-auto 
    `}
  >
    <span className="font-primary">Home</span>
    <span className="font-primary">Skills</span>
    <span className="font-primary">Projects</span>
    <span className="font-primary">Contact</span>
  </nav>
</header>

     <section 
     className='flex h-screen flex-col items-center text-center px-60 justify-center font-primary text-secondary
                max-sm:px-10'>
      <p className='font-heading text-4xl mb-3 text-black'>Njong Remy Nga'i</p>
      <p className='text-2xl mb-5'>Front End Developer</p>
      <p>Driven by problem solving and clarity of execution.
        Focused on turning complex ideas into intuitive,
        responsive interfaces with careful attention to usability, performance, 
        and visual balance. Dedicated to building digital experiences that feel purposeful, polished, and reliable.
      </p>
      <div className='flex gap-4 mt-7 mb-7'>
        <button className='border p-2 w-30 rounded-md'>View Projects</button>
        <button className='border p-2 w-30 rounded-md'>Contact me</button>
      </div>
      <div className='flex gap-4'>
        <Github/>
        <Linkedin/>
        <Mail/>
      </div>
     </section>
   </main>
  )
}

export default App
