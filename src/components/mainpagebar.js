import React from "react";
import { Link, useLocation } from "react-router-dom";

function Mainpagebar() {
	const location = useLocation();
	const styles = "px-4 flex text-center items-center";

	const active = "border-t-2 border-t-[#f9826c] bg-[#24292e]";

	return (
		<div className='flex items-center border border-[#303941] font-sans curson-pointer text-[0.9rem]  bg-[#313c43] text-[#ececec] '>
			<Link to='/'>
				<div className={`${styles} ${location.pathname === "/" && active}`}>
					<img src='/react_icon.svg' alt='home.jsx' height={18} width={18} />
					<p className='truncate'>home.jsx</p>
				</div>
			</Link>

			<Link to='/about'>
				<div
					className={`${styles} ${location.pathname === "/about" && active}`}
				>
					<img src='/html_icon.svg' alt='about.html' height={18} width={18} />
					<p className='truncate'>about.html</p>
				</div>
			</Link>

			<Link to='/contact'>
				<div
					className={`${styles} ${location.pathname === "/contact" && active}`}
				>
					<img src='/css_icon.svg' alt='contact.css' height={18} width={18} />
					<p className='truncate'>contact.css</p>
				</div>
			</Link>

			<Link to='/projects'>
				<div
					className={`${styles} ${location.pathname === "/projects" && active}`}
				>
					<img src='/js_icon.svg' alt='projects.js' height={18} width={18} />
					<p className='truncate'>projects.js</p>
				</div>
			</Link>

			<Link to='/techstack'>
				<div
					className={`${styles} ${
						location.pathname === "/techstack" && active
					}`}
				>
					<img
						src='/markdown_icon.svg'
						alt='github.md'
						height={18}
						width={18}
					/>
					<p>techstack.json</p>
				</div>
			</Link>
		</div>
	);
}

export default Mainpagebar;
