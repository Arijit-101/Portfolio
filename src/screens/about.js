import React from "react";
import Mainpagebar from "../components/mainpagebar";



function About() {
	return (
		<div className='h-[calc(100vh-30px-25px)] w-[calc(100vw-50px)] md:w-5/6 bg-[#24292e] text-white font-TaiHeritagePro'>
			<Mainpagebar />
			<div className="my-10 md:my-[4rem] m-4 text-2xl text-left ">
          <div className="flex mb-4"> <p className='mr-[1rem] text-gray-500 font-Inconsolata font-semibold'>
					1 </p> Hi 👋, this is Arijit .
          </div>

          <div className="flex mb-4"> <p className='mr-[1rem] text-gray-500 font-Inconsolata font-semibold'>
					2 </p> I live in Kolkata , India <img className="h-9 ml-3" src="india.png" alt="" /> </div>

          <div className="flex mb-4"> <p className='mr-[1rem] text-gray-500 font-Inconsolata font-semibold'>
					3 </p>Current Degree :  B.Tech in CSE 	&#128187; <p className="hidden md:flex">(2019-2023) </p> </div> 

          <div className="flex mb-4" > <p className='mr-[1rem] text-gray-500 font-Inconsolata font-semibold'>
					4 </p>College : <p className="mr-2 hidden md:flex">Future Institute of Engineering & Management</p> <p className="mr-2 md:hidden">FIEM</p> 👨‍🎓</div>

          <div className="flex mb-4" > <p className='mr-[1rem] text-gray-500 font-Inconsolata font-semibold'>
					5 </p>School : Nava Nalanda &#127979; </div>

          <div className="flex mb-4"> <p className='mr-[1rem] text-gray-500 font-Inconsolata font-semibold'>
					6 </p> <p className="hidden md:flex">Technologies that i'm currently learning</p>  <p className="md:hidden">Domain Knowledge : </p> </div> 

          <div className="flex mb-4"> <p className='mr-[1rem] text-gray-500 font-Inconsolata font-semibold'>
					7</p> <p className="ml-8 text-[#f9826c]">Web Dev <span className="text-white">&</span>  Machine Learning</p> </div>  

          <div className="flex mb-4"> <p className='mr-[1rem] text-gray-500 font-Inconsolata font-semibold'>
					8 </p> <p className="hidden md:flex"> I'm also passionate about coding</p> <p className="md:hidden">Coding enthusiast </p> <img
							className='ml-2'
							src='https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg'
							alt='java'
							width='40'
							height='40'
						/> </div> 

      </div>
		</div>
	);
}

export default About;
