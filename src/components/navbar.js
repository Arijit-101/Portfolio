import React from "react";

function Navbar() {
	return (
		<div className='flex font-sans text-sm bg-[#191919cc] h-[30px] border-b-2 border-b-[#191d20] text-[#fff]  p-0.5 items-center justify-center'>
			<img
				className='h-[25px] w-[25px] p-0.5 ml-2 mt-1 mb-1 '
				src='vscode_icon.svg'
				alt='VSCode Icon'
			/>
			<div className='hidden md:inline-flex space-x-5  ml-5 mr-1 mt-1 mb-1 '>
				<p>File</p>
				<p>Edit</p>
				<p>View</p>
				<p>Go</p>
				<p>Run</p>
				<p>Terminal</p>
				<p>Help</p>
			</div>

			<div className='text-center w-full  ml-auto '>
				Arijit Saha - Visual Studio Code
			</div>

			<div className='flex flex-1 items-center text-right pr-2 '>
				<span className='bg-[#f1fa8c] ml-auto h-[13px] w-[13px] rounded-full '></span>
				<span className='bg-[#50fa7b] ml-0.5 h-[13px] w-[13px] rounded-full'></span>
				<span className='bg-[#ff5555] ml-0.5 h-[13px] w-[13px] rounded-full'></span>
			</div>
		</div>
	);
}

export default Navbar;
