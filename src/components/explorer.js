import { React, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/outline";

function Explorer() {
	const location = useLocation();
	const [portfolioOpen, setPortfolioOpen] = useState(true);
	const style = "inline text-left items-left ";
	const notactive = "hidden";

	return (
		<div className='h-[calc(100vh-30px-25px)] text-[#E1E4E8] font-Sanspro border-r border-r-[#161a1d] w-3/4 bg-[#1f2428] hidden md:inline-block'>
			<p className='px-4 py-1 font-bold text-lg tracking-widest mb-2 mt-3 truncate text-left'>
				Explorer
			</p>

			<div>
				<div
					className='px-3 py-1 font-bold text-lg  flex text-center items-center m-auto cursor-pointer'
					onClick={() => setPortfolioOpen(!portfolioOpen)}
				>
					<ChevronRightIcon
						className='transition duration-200 ease-in h-5 w-5  truncate'
						style={portfolioOpen ? { transform: "rotate(90deg)" } : {}}
					/>
					Portfolio
				</div>

				<div className={` ${style} ${portfolioOpen == false && notactive}`}>
					<Link to='/'>
						<div className='flex py-2 px-4'>
							<img
								className='pr-1'
								src='/react_icon.svg'
								alt='home.jsx'
								height={18}
								width={18}
							/>{" "}
							<p className='font-bold text-sm lg:text-lg truncate '>home.jsx</p>
						</div>
					</Link>

					<Link to='/about'>
						<div className='flex py-2 px-4'>
							<img
								className='pr-1'
								src='/html_icon.svg'
								alt='about.html'
								height={18}
								width={18}
							/>{" "}
							<p className='font-bold text-sm lg:text-lg truncate '>
								about.html
							</p>
						</div>
					</Link>

					<Link to='/contact'>
						<div className='flex py-2 px-4'>
							<img
								className='pr-1'
								src='/css_icon.svg'
								alt='contact.css'
								height={18}
								width={18}
							/>{" "}
							<p className='font-bold text-sm lg:text-lg truncate '>
								contact.css
							</p>
						</div>
					</Link>

					<Link to='/projects'>
						<div className='flex py-2 px-4'>
							<img
								className='pr-1'
								src='/js_icon.svg'
								alt='projects.js'
								height={18}
								width={18}
							/>{" "}
							<p className='font-bold text-sm lg:text-lg truncate '>
								projects.js
							</p>
						</div>
					</Link>

					<Link to='/techstack'>
						<div className='flex py-2 px-4'>
							<img
								className='pr-1'
								src='/markdown_icon.svg'
								alt='techstack.json'
								height={18}
								width={18}
							/>{" "}
							<p className='font-bold text-sm lg:text-lg truncate '>
								techstack.json
							</p>
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Explorer;
