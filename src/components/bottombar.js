import React from "react";
import {
	BellIcon,
	ExclamationIcon,
	FingerPrintIcon,
	PlusCircleIcon,
	ShareIcon,
} from "@heroicons/react/outline";

function Bottombar() {
	return (
		<div className='flex font-sans text-sm bg-[#191919cc] h-[25px] text-[#fff] p-0.5  '>
			<div className='items-left flex '>
				<a className='flex hover:bg-[#5f5f64] ml-1' href=''>
					<ShareIcon className='h-[18px] ml-1 mr-2 my-[2px] -rotate-45' />
					<p className='pb-3 mr-4'>main </p>
				</a>

				<div className='flex hover:bg-[#5f5f64] cursor-pointer'>
					<PlusCircleIcon className='h-[18px] mx-1 my-[2px] -rotate-45' />
					<p className='pb-3 mr-2'>0</p>

					<ExclamationIcon className='h-[18px] mx-1 my-[2px]' />
					<p className='pb-3 mr-4'>0</p>
				</div>
			</div>

			<div className='ml-auto flex'>
				<div className='flex hover:bg-[#5f5f64] cursor-pointer '>
					<FingerPrintIcon className='h-[18px] mx-2 my-[2px] -rotate-45' />
					<p className='pb-3 mr-4'>Go Live </p>
				</div>

				<div className='flex hover:bg-[#5f5f64] mr-2 cursor-pointer'>
					<BellIcon className='h-[20px] mx-2 py-[0.5px] ' />
				</div>
			</div>
		</div>
	);
}

export default Bottombar;
