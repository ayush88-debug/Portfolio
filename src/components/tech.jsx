import { BiLogoAws, BiLogoCss3, BiLogoDocker, BiLogoFirebase, BiLogoGit, BiLogoHtml5, BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoPostgresql, BiLogoPython, BiLogoReact, BiLogoRedux, BiLogoTailwindCss } from "react-icons/bi"
import { SiAppwrite, SiExpress, SiPostman, SiShadcnui } from "react-icons/si"
import { VscGithub } from "react-icons/vsc"
import { motion } from "motion/react"


const Tech = () => {
  return (
    <div id="tech" className="flex flex-col min-h-[70vh] w-full items-center justify-center gap-0 md:gap-32">
      
      <motion.h1
      initial={{y:50, opacity:0}}
      whileInView={{y:0, opacity:100}}
      transition={{duration:0.5, delay:0.2}}
       className="text-4xl font-light text-white md:text-6xl">Technologies</motion.h1>

      <div className="flex flex-wrap items-center justify-center gap-10 p-5">

        <motion.div
        initial={{y:50, opacity:0}}
        whileInView={{y:0, opacity:100}}
        transition={{duration:0.5, delay:0.2}}
        >
        <BiLogoJavascript className="cursor-pointer text-[80px] text-yellow-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px] rounded-full"/>
        </motion.div>

        <motion.div
        initial={{y:50, opacity:0}}
      whileInView={{y:0, opacity:100}}
      transition={{duration:0.5, delay:0.2}}
        >
        <BiLogoPython className="cursor-pointer text-[80px] text-sky-700 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px] rounded-full"/>
        </motion.div>

        <motion.div
        initial={{y:50, opacity:0}}
      whileInView={{y:0, opacity:100}}
      transition={{duration:0.5, delay:0.2}}
        >
        <BiLogoHtml5 className="cursor-pointer text-[80px] text-amber-700 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>

        <motion.div
        initial={{y:50, opacity:0}}
      whileInView={{y:0, opacity:100}}
      transition={{duration:0.5, delay:0.2}}
        >
        <BiLogoCss3 className="cursor-pointer text-[80px] text-sky-700 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>

        <motion.div
        initial={{y:50, opacity:0}}
      whileInView={{y:0, opacity:100}}
      transition={{duration:0.5, delay:0.2}}
        >
        <BiLogoReact className="cursor-pointer text-[80px] text-cyan-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>

        <motion.div
        initial={{y:50, opacity:0}}
      whileInView={{y:0, opacity:100}}
      transition={{duration:0.5, delay:0.2}}
        >
        <BiLogoRedux className="cursor-pointer text-[80px] text-violet-800 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px] rounded-full"/>
        </motion.div>

        <motion.div
        initial={{y:50, opacity:0}}
      whileInView={{y:0, opacity:100}}
      transition={{duration:0.5, delay:0.2}}
        >
        <BiLogoNodejs className="cursor-pointer text-[80px] text-lime-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>

        <motion.div
        initial={{y:50, opacity:0}}
      whileInView={{y:0, opacity:100}}
      transition={{duration:0.5, delay:0.2}}
        >
        <SiExpress className="cursor-pointer text-[80px] text-white transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>

        <motion.div
        initial={{y:50, opacity:0}}
      whileInView={{y:0, opacity:100}}
      transition={{duration:0.5, delay:0.2}}
        >
        <BiLogoMongodb className="cursor-pointer text-[80px] text-green-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>

        <motion.div
        initial={{y:50, opacity:0}}
      whileInView={{y:0, opacity:100}}
      transition={{duration:0.5, delay:0.2}}
        >
        <BiLogoPostgresql className="cursor-pointer text-[80px] text-sky-700 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>

        <motion.div
        initial={{y:50, opacity:0}}
      whileInView={{y:0, opacity:100}}
      transition={{duration:0.5, delay:0.2}}
        >
        <BiLogoTailwindCss className="cursor-pointer text-[80px] text-cyan-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>

        <motion.div
        initial={{y:50, opacity:0}}
      whileInView={{y:0, opacity:100}}
      transition={{duration:0.5, delay:0.2}}
        >
        <BiLogoFirebase className="cursor-pointer text-[80px] text-amber-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>

        <motion.div
        initial={{y:50, opacity:0}}
      whileInView={{y:0, opacity:100}}
      transition={{duration:0.5, delay:0.2}}
        ><SiAppwrite className="cursor-pointer text-[80px] text-pink-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>

        <motion.div
        initial={{y:50, opacity:0}}
      whileInView={{y:0, opacity:100}}
      transition={{duration:0.5, delay:0.2}}
        >
        <BiLogoGit className="cursor-pointer text-[80px] text-orange-600 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
        </motion.div>

       <motion.div
       initial={{y:50, opacity:0}}
      whileInView={{y:0, opacity:100}}
      transition={{duration:0.5, delay:0.2}}
       >
       <VscGithub className="cursor-pointer text-[80px] text-white transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
       </motion.div>

       <motion.div
       initial={{y:50, opacity:0}}
      whileInView={{y:0, opacity:100}}
      transition={{duration:0.5, delay:0.2}}
       >
       <SiPostman className="cursor-pointer text-[80px] text-orange-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]"/>
       </motion.div>


        <motion.div
        initial={{y:50, opacity:0}}
      whileInView={{y:0, opacity:100}}
      transition={{duration:0.5, delay:0.2}}
        >
        <BiLogoDocker className="cursor-pointer text-[80px] text-sky-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px] rounded-full"/>
        </motion.div>

       <motion.div
       initial={{y:50, opacity:0}}
      whileInView={{y:0, opacity:100}}
      transition={{duration:0.5, delay:0.2}}
       >
       <SiShadcnui className="cursor-pointer text-[80px] text-white transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px] rounded-full"/>
       </motion.div>

        <motion.div
        initial={{y:50, opacity:0}}
      whileInView={{y:0, opacity:100}}
      transition={{duration:0.5, delay:0.2}}
        >
        <BiLogoAws className="cursor-pointer text-[80px] text-amber-500 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px] rounded-full"/>
        </motion.div>

      </div>

    </div>
  )
}

export default Tech
