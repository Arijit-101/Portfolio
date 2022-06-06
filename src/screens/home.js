import React from "react";
import Mainpagebar from "../components/mainpagebar";
import Typical from "react-typical";
import Typewriter from "typewriter-effect";
import { Link, useLocation } from "react-router-dom";

function Home() {
	const location = useLocation();
	return (
		<div className='h-[calc(100vh-30px-25px)] w-[calc(100vw-50px)] md:w-5/6 bg-[#24292e]'>
			<Mainpagebar />
			<div className='text-[#e8e6e6] fixed top-[27%] left-[20%]'>
				<h1 className='md:text-left text-[#eee] font-semibold text-5xl md:text-7xl mb-6 font-Rampart '>
					Arijit Saha
				</h1>
				<div className='md:text-left text-[#d74949] text-4xl md:flex inline font-Montserrat'></div>
			</div>

			<div className=' fixed top-[40%] md:top-[45%] left-[20%] '>
				<div className='md:text-left text-[#d74949] text-2xl md:text-4xl flex truncate font-Montserrat'>
					<h1>I'm a</h1>
					&nbsp;
					<Typewriter
						options={{
							strings: [" Front End Developer !", " Programmer !"],
							autoStart: true,
							loop: true,
						}}
					/>
				</div>
			</div>

			<div className='absolute top-[50%] md:top-[57%] left-[20%] inline-block md:text-lg'>
				<Link to='/projects'>
					<button className='bg-[#f9826c]  p-3 rounded hover:opacity-90 hover:scale-110 transform ease-in duration-300 mr-6 font-semibold'>
						My Work
					</button>
				</Link>
				<Link to='/contact'>
					<button className=' bg-transparent border-2 border-[#f9826c] text-[#eee] p-3 rounded hover:opacity-90 hover:scale-110 transform ease-in duration-300 font-semibold '>
						Contact Me
					</button>
				</Link>
			</div>

			<img
				className='h-[500px] absolute top-[14%] right-[4%]  hidden lg:flex'
				src='man.png'
			></img>
		</div>
	);
}

export default Home;
