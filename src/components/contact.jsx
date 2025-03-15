import { motion } from "motion/react"

const Contact = () => {
  return (
    <motion.div
      initial={{y:50, opacity:0}}
      whileInView={{y:0, opacity:100}}
      transition={{duration:0.5, delay:0.2}}
     id="Contact" className="flex  w-full items-center justify-center">

      <div className="flex flex-col justify-center items-center gap-5 p-14">

        <h1 className="text-center text-5xl md:text-7xl bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
          Get in Touch
        </h1>

        <p className="text-center text-lg font-semibold text-gray-400">
          want to chat? Send me an E-mail through this button and I'll respond whenever I can.
        </p>

        <a href="mailto:ghavghaveayush782@gmail.com" className="text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600">
          Contact Me
        </a>
      </div>
      
    </motion.div>
  )
}

export default Contact
