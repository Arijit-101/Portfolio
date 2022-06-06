import React from "react";
import Explorer from "./explorer";
import Purenavbar from "./purenavbar";

function Sidebar() {
	return (
		<div className='h-[calc(100vh-30px-25px)] w-[55px] md:w-1/6 flex'>
			<Purenavbar />
			<Explorer />
		</div>
	);
}

export default Sidebar;
