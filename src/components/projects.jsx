import { motion } from "motion/react"



 const projectData =[
  {
    image:"https://res.cloudinary.com/dogqhneni/image/upload/v1742055736/VistaVault_edsvok.png",
    title:"VistaVault - Blogging Platform",
    description:"VistaVault is a modern blogging platform built with React, Tailwind CSS, and Appwrite, featuring rich text editing, authentication, dynamic search, and customizable themes. It offers seamless content management, public/private blog visibility, and a responsive UI, ensuring an optimized user experience.",
    technologies:["React", "Tailwind CSS","Appwrite", "Redux Toolkit", "React Router","ShadCN", "Jodit"],
    githubLink:"https://github.com/ayush88-debug/VistaVault",
    liveLink:"https://vista-vault-app.vercel.app/"
  },
  {
    image:"https://res.cloudinary.com/dogqhneni/image/upload/v1742055736/Backend_to1nep.png",
    title:"Ecommerce - backend",
    description:"Ecommerce Backend is a Node.js and Express-powered API for secure authentication, product management, and wishlist handling. It features JWT authentication, bcrypt-secured passwords, Cloudinary for media storage, and Multer for file uploads. Built with MongoDB and Mongoose, it enables efficient data retrieval, aggregation, pagination, and role-based access control. The backend supports secure sessions, optimized queries, and seamless product handling for scalability.",
    technologies:["Node.js", "Express.js","MongoDB", "JWT", "Multer", "Cloudinary", "Mongoose"],
    githubLink:"https://github.com/ayush88-debug/Ecommerce-backend",
    liveLink:""
  },
  {
    image:"https://res.cloudinary.com/dogqhneni/image/upload/v1742055736/ToDo_h2dhdg.png",
    title:"TickTickDone - TodDo App",
    description:"A React-powered To-Do App using Redux Toolkit for state management and Tailwind CSS for styling. Users can add, edit, delete, and mark tasks as complete, with local storage persistence. Optimized for responsiveness, ensuring a smooth and efficient task-tracking experience.",
    technologies:["React", "Redux Toolkit", "Tailwind CSS", "Vite"],
    githubLink:"https://github.com/ayush88-debug/TickTickDone",
    liveLink:"https://tick-tick-done-gold.vercel.app/"
  },
  {
    image:"https://res.cloudinary.com/dogqhneni/image/upload/v1742056411/portfolio_paejpm.png",
    title:"Portfolio",
    description:"This portfolio is a modern, responsive web application built using React, Vite, and Tailwind CSS. It features a sleek design with sections for projects, tech stack, contact, and a dynamic hero section. The UI is enhanced with smooth animations and an interactive user experience. It ensures seamless navigation and accessibility across devices",
    technologies:["React", "Vite", "Tailwind CSS", "JavaScript", "Framer Motion"],
    githubLink:"https://github.com/ayush88-debug/Portfolio",
    liveLink:"https://ayush-ghavghave.vercel.app/"
  },
  {
    image:"https://res.cloudinary.com/dogqhneni/image/upload/v1742055736/Currency_converter_i285ub.png",
    title:"Currency Converter App",
    description:"A React-based Currency Converter App with real-time exchange rates and instant conversions. Users can swap currencies, input amounts, and get automatic calculations. Built with Tailwind CSS for a sleek, responsive UI.",
    technologies:["React", "Tailwind CSS", "Vite", "Fetch API"],
    githubLink:"https://github.com/ayush88-debug/currency_converter",
    liveLink:"https://currency-converter-ochre-one.vercel.app/"
  },
  {
    image:"https://res.cloudinary.com/dogqhneni/image/upload/v1742055736/Guess_number_q1aq70.png",
    title:"Guess The Number - Game",
    description:"A simple number guessing game built with HTML, CSS, and JavaScript. Players have 10 attempts to guess a randomly generated number between 1 and 100. The game provides real-time feedback and a 'Play Again' option after each round. Designed with a sleek UI and fully responsive for all devices.",
    technologies:["HTML", "CSS", "JavaScript"],
    githubLink:"https://github.com/ayush88-debug/Guess_Number_Game",
    liveLink:"https://ayush88-debug.github.io/Guess_Number_Game/"
  }
 ]


 const ProjectCard= ({project,number})=>{
  const direction = number % 2 === 0 ? 50 : -50; 

  return (
  <motion.div
    initial={{x: direction, opacity:0}}
    whileInView={{x:0, opacity:100}}
    viewport={{once:true}}
    transition={{duration:0.5, delay:0.2}}

    className="flex flex-col items-center gap-8 md:flex-row md:gap-24">

      <img src={project.image} alt={project.title}
      className="w-full cursor-pointer rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px] bg-cover"
      />

      <div className="flex flex-col gap-5">

        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">{project.title}</div>
          <p className="text-gray-300">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-5">
          {
            project.technologies.map((tech, index)=>(
              <span key={index}
              className="rounded-lg bg-white text-black p-1.5">
                {tech}
              </span>
            ))
          }
        </div>

        <div className="flex flex-wrap gap-5">

          {
            project?.githubLink && project?.githubLink?.trim() != "" && (
              <a href={project?.githubLink?.trim()!="" ? project?.githubLink : "/#home"}
              target="_blank"
              className="rounded-lg min-w-[83px] text-center border border-indigo-600 bg-black px-2.5 py-1.5 text-lg  text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-600">
                Github
              </a>
            )
          }

          {
            project?.liveLink && project?.liveLink?.trim() != "" && (
              <a href={project?.liveLink?.trim()!="" ? project?.liveLink : "/#home"}
              target="_blank"
              className="rounded-lg min-w-[83px] text-center border border-indigo-600 bg-black px-2.5 py-1.5 text-lg  text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-indigo-600">
                Live
              </a>
            )
          }


        </div>

        </div>

    </motion.div>
  )
 }


const Projects = () => {
  return (
    <div id="projects" className="flex flex-col min-h-screen w-full items-center justify-center gap-16 p-4 md:px-14 md:py-24">

      <motion.h1 
      initial={{y:50, opacity:0}}
      whileInView={{y:0, opacity:100}}
      viewport={{once:true}}
      transition={{duration:0.5, delay:0.2}}
      className="text-4xl font-light text-white md:text-6xl">My Projects</motion.h1>

      <div className="flex flex-col w-full gap-16 text-white">
        {
          projectData.map((project, index)=>(
            <ProjectCard key={index} project={project} number={index}/>
          ))
        }

      </div>
      
    </div>
  )
}

export default Projects
