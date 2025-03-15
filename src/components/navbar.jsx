import { useState } from "react"
import { BiMenu, BiX } from "react-icons/bi"
import { BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs"
import { SiLeetcode } from "react-icons/si"
import { motion } from "motion/react"



const Navbar = () => {

    const [isOpen, setIsOpen]=useState(false)

    const menuToggle=()=>{
        setIsOpen(!isOpen)
    }



  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
        <a href="#home" className=" bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100">Ayush</a>

        <ul className="hidden md:flex gap-10">
            <a href="#home" className="cursor-pointer opacity-75 hover:opacity-100 transition-all duration-300">
                <li>Home</li>
            </a>

            <a href="#tech" className="cursor-pointer opacity-75 hover:opacity-100 transition-all duration-300">
                <li>Tech</li>
            </a>

            <a href="#projects" className="cursor-pointer opacity-75 hover:opacity-100 transition-all duration-300">
                <li>Projects</li>
            </a>
            <a href="#Contact" className="cursor-pointer opacity-75 hover:opacity-100 transition-all duration-300">
                <li>Contact</li>
            </a>

        </ul>

        <ul className="hidden md:flex gap-5">
            <a href="https://www.linkedin.com/in/ayush-ghavghave/" target="_blank">
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">

                    <BsLinkedin/>
                </li>
            </a>
            <a href="https://github.com/ayush88-debug" target="_blank">
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">
                    <BsGithub/>
                </li>
            </a>
            <a href="https://leetcode.com/u/Ayush_Ghavghave/" target="_blank">
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-yellow-500 hover:opacity-100">

                    <SiLeetcode/>
                </li>
            </a>
            <a href="https://x.com/Ayush80343003" target="_blank">
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-cyan-500 hover:opacity-100">

                    <BsTwitterX />
                </li>
            </a>

        </ul>


        {
            isOpen ? (
                <BiX onClick={menuToggle} className="block md:hidden text-4xl"
                />
            ) : (
                <BiMenu onClick={menuToggle}
                className="block md:hidden text-4xl"
                />
            )
        }

        {isOpen && (
            <motion.div
            initial={{x:50, opacity:0}}
            animate={{x:0, opacity:100}}
            transition={{duration:0.3}}
             className={`fixed right-0 top-17 flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-1 border-gray-800 bg-black/90 p-12 ${isOpen ? "block" : "hidden"}`}>

                <ul className="flex flex-col gap-8">
                    <a href="#home" className="cursor-pointer opacity-75 hover:opacity-100 transition-all duration-300">
                        <li>Home</li>
                    </a>

                    <a href="#tech" className="cursor-pointer opacity-75 hover:opacity-100 transition-all duration-300">
                        <li>Tech</li>
                    </a>

                    <a href="#projects" className="cursor-pointer opacity-75 hover:opacity-100 transition-all duration-300">
                        <li>Projects</li>
                    </a>
                    <a href="#Contact" className="cursor-pointer opacity-75 hover:opacity-100 transition-all duration-300">
                        <li>Contact</li>
                    </a>

                </ul>

                <ul className="flex flex-wrap gap-5">
                    <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">

                        <BsLinkedin/>
                    </li>
                    <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-orange-500 hover:opacity-100">

                        <BsGithub/>
                    </li>
                    <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-yellow-500 hover:opacity-100">

                        <SiLeetcode/>
                    </li>
                    <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-cyan-500 hover:opacity-100">

                        <BsTwitterX />
                    </li>

                </ul>   

            </motion.div>
        )}


    </nav>
  )
}

export default Navbar
