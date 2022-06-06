import React from 'react';
import { Link, useLocation } from "react-router-dom";

export default function SidebarButton(props) {
    const location = useLocation();
    const isActive = location.pathname === props.to;
    const btnClass = isActive ? "btn-body active" : "btn-body";
  return (
    <Link to={props.to}>
      <div className={btnClass}>
        <img
				className='h-[25px] w-[25px] p-0.5 ml-2 mt-1 mb-1 '
                fill='red'
				src={props.icon}
                style={{ height: 53, width: 36 }}
				alt='VSCode Icon'
			/>
      </div>
    </Link>
  );
}

