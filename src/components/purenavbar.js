import React from "react";
import { Link, useLocation } from "react-router-dom";

import {
	SearchIcon,
	CogIcon,
	DocumentDuplicateIcon,
	CodeIcon,
	MailIcon,
	UserCircleIcon,
	PencilIcon,
} from "@heroicons/react/outline";

function Purenavbar() {
	const location = useLocation();
	const styles =
		"space-y-5 pt-5 pl-1 md:pl-0.5 lg:pl-2 text-center items-center justify-between";
	const active = "border-l-2 border-l-[#f9826c]";
	return (
		<div className='h-[calc(100vh-30px-25px)] text-white w-full md:w-1/4 text-center items-center justify-between bg-[#161a1d] md:bg-[#24292e]  space-y-5 pt-5  relative'>
			<div className='absolute top-2 text-center items-center justify-between'>
				
				<Link to='/Portfolio'>
					<div className={`${styles} ${location.pathname === "/Portfolio" && active}`}>
						<DocumentDuplicateIcon className='h-8 w-10 ' />
					</div>
				</Link>

				<Link to='/Portfolio/about'>
					<div
						className={`${styles} ${location.pathname === "/Portfolio/about" && active}`}
					>
						<SearchIcon className='h-8 w-10' />
					</div>
				</Link>

				<Link to='/Portfolio/projects'>
					<div
						className={`${styles} ${
							location.pathname === "/Portfolio/projects" && active
						}`}
					>
						<CodeIcon className='h-8 w-10' />
					</div>
				</Link>

				<Link to='/Portfolio/techstack'>
					<div
						className={`${styles} ${
							location.pathname === "/Portfolio/techstack" && active
						}`}
					>
						<PencilIcon className='h-8 w-10' />
					</div>
				</Link>

				<Link to='/Portfolio/contact'>
					<div
						className={`${styles} ${
							location.pathname === "/Portfolio/contact" && active
						}`}
					>
						<MailIcon className='h-8 w-10' />
					</div>
				</Link>
			</div>

			<div className='absolute bottom-3 text-center items-center justify-between'>
				<Link to='/Portfolio'>
					<div className='space-y-5 pt-5 pl-1 md:pl-0.5 lg:pl-2 text-center items-center justify-between'>
						<UserCircleIcon className='h-9 w-10' />
					</div>
				</Link>

				<Link to='/Portfolio'>
					<div className='space-y-5 pt-5 pl-1 md:pl-0.5 lg:pl-2 text-center items-center justify-between'>
						<CogIcon className='h-8 w-10' />
					</div>
				</Link>
			</div>
		</div>
	);
}

export default Purenavbar;
