import React from "react";
import Mainpagebar from "../components/mainpagebar";

function Contact() {
	return (
		<div className='h-[calc(100vh-30px-25px)] w-[calc(100vw-50px)] md:w-5/6 bg-[#24292e]'>
			<Mainpagebar />
			<h1 className='m-[1.5rem] text-[#E1E4E8] text-left  text-lg md:text-2xl font-bold'>
				Reach Out Via Socials
			</h1>
			<div className='text-left m-4 flex md:text-2xl'>
				<p className='mr-[1rem] text-gray-500 font-Inconsolata font-semibold'>
					1
				</p>
				<p className='text-[#f9826c] '>
					.socials <span className='text-[#E1E4E8]'>&#123;</span>{" "}
				</p>
			</div>

			<div className='text-left m-4 flex md:text-2xl'>
				<p className='mr-[1rem] text-gray-500 font-Inconsolata font-semibold'>
					2
				</p>
				<p className='text-[#E1E4E8] ml-20'> website :</p>
				<a
					className='text-[#f9826c] ml-5 hover:border-b-2 hover:border-b-[#f9826c]'
					href='https://arijit-101.github.io/Portfolio/'
				>
					arijit-101.github.io/Portfolio
				</a>
				<span className='text-[#E1E4E8] ml-4'>;</span>
			</div>

			<div className='text-left m-4 flex md:text-2xl'>
				<p className='mr-[1rem] text-gray-500 font-Inconsolata font-semibold'>
					3
				</p>
				<p className='text-[#E1E4E8] ml-20'> email :</p>
				<a
					className='text-[#f9826c] ml-5 hover:border-b-2 hover:border-b-[#f9826c]'
					href='mailto:arijitsaha3002@gmail.com'
				>
					arijitsaha3002@gmail.com
				</a>
				<span className='text-[#E1E4E8] ml-4'>;</span>
			</div>

			<div className='text-left m-4 flex md:text-2xl'>
				<p className='mr-[1rem] text-gray-500 font-Inconsolata font-semibold'>
					4
				</p>
				<p className='text-[#E1E4E8] ml-20'> github :</p>
				<a
					className='text-[#f9826c] ml-5 hover:border-b-2 hover:border-b-[#f9826c]'
					href='https://github.com/Arijit-101'
				>
					Arijit-101
				</a>
				<span className='text-[#E1E4E8] ml-4'>;</span>
			</div>

			<div className='text-left m-4 flex md:text-2xl'>
				<p className='mr-[1rem] text-gray-500 font-Inconsolata font-semibold'>
					5
				</p>
				<p className='text-[#E1E4E8] ml-20'> linkedin :</p>
				<a
					className='text-[#f9826c] ml-5 hover:border-b-2 hover:border-b-[#f9826c]'
					href='https://www.linkedin.com/in/arijit-saha-a671b81a0/'
				>
					Arijit Saha
				</a>
				<span className='text-[#E1E4E8] ml-4'>;</span>
			</div>

			<div className='text-left m-4 flex md:text-2xl'>
				<p className='mr-[1rem] text-gray-500 font-Inconsolata font-semibold'>
					6
				</p>
				<p className='text-[#E1E4E8] ml-20'> leetcode :</p>
				<a
					className='text-[#f9826c] ml-5 hover:border-b-2 hover:border-b-[#f9826c]'
					href='https://leetcode.com/Arijit_Saha/'
				>
					Arijit_Saha
				</a>
				<span className='text-[#E1E4E8] ml-4'>;</span>
			</div>

			<div className='text-left m-4 flex md:text-2xl'>
				<p className='mr-[1rem] text-gray-500 font-Inconsolata font-semibold'>
					7
				</p>
				<p className='text-[#E1E4E8] ml-20'> twitter :</p>
				<a
					className='text-[#f9826c] ml-5 hover:border-b-2 hover:border-b-[#f9826c]'
					href='https://twitter.com/ArijitS39351139?t=CkhH3s9npD6v1D9LP-XsFw&s=09'
				>
					@ArijitS39351139
				</a>
				<span className='text-[#E1E4E8] ml-4'>;</span>
			</div>

			<div className='text-left m-4 flex md:text-2xl'>
				<p className='mr-[1rem] text-gray-500 font-Inconsolata font-semibold'>
					8
				</p>
				<p className='text-[#E1E4E8] ml-20'> instagram :</p>
				<a
					className='text-[#f9826c] ml-5 hover:border-b-2 hover:border-b-[#f9826c]'
					href='https://www.instagram.com/terrible_iso/'
				>
					@terrible_iso
				</a>
				<span className='text-[#E1E4E8] ml-4'>;</span>
			</div>

			<div className='text-left m-4 flex md:text-2xl'>
				<p className='mr-[1rem] text-gray-500 font-Inconsolata font-semibold'>
					9
				</p>
				<p className='text-[#E1E4E8] ml-20'> phone no. :</p>
				<a className='text-[#f9826c] ml-5 ' href=''>
					+91 9051107563
				</a>
				<span className='text-[#E1E4E8] ml-4'>;</span>
			</div>

			<div className='text-left m-4 flex md:text-2xl'>
				<p className='mr-[1rem] text-gray-500 font-Inconsolata font-semibold'>
					10
				</p>
				<span className='text-[#E1E4E8] ml-4'>&#125;</span>
			</div>
		</div>
	);
}

export default Contact;
