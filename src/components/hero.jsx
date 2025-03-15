
import { motion } from "motion/react"
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">

        <div className="flex flex-col items-center justify-center gap-7 text-white">

            <motion.div
            initial={{y:-50 , opacity:0}}
            whileInView={{y:0 , opacity:100}}
            transition={{duration:0.8, delay:0.2}}
            >
                <img src="https://res.cloudinary.com/dogqhneni/image/upload/v1742055735/profile_p490m7.jpg" alt="profile" className="w-[250px] 
                 cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl 
                hover:shadow-indigo-600" />
            </motion.div>
            
            <motion.div
            initial={{y:50 , opacity:0}}
            whileInView={{y:0 , opacity:100}}
            transition={{duration:0.8, delay:0.2}}
             className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
                <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent 
                 text-5xl font-light transition-all duration-300 py-2">Ayush Ghavghave
                </h1>
                <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent 
                 text-2xl transition-all duration-300">Full Stack Developer</h3>

                <p className="md:text-base text-pretty text-sm text-gray-400">
                I'm a full-stack developer passionate about building scalable and high-performance applications. Skilled in MongoDB, Express.js, React, Node.js, Tailwind. I create seamless user experiences backed by efficient architectures. Currently exploring AI technologies and LLMs, I strive to innovate and optimize solutions. Let's collaborate and build something impactful together!
                </p>

                <a href="https://drive.google.com/file/d/1ibwD5n1fw-snZkb2SMVv7GUeQU2hh_qd/view?usp=sharing"
                  target="_blank"
                  className=" p-3 font-semibold text-bl"
                >
                    <InteractiveHoverButton className={"text-black border-none"}>
                      Resume 
                    </InteractiveHoverButton>
                </a>
                


            </motion.div>

        </div>
       
    </div>
  )
}

export default Hero
