import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bottombar from "../components/bottombar";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";
import About from "./about";
import Contact from "./contact";
import Techstack from "./techstack";
import Home from "./home";
import Projects from "./projects";

function Main() {
	return (
		<Router>
			<div className=''>
				<Navbar />
			</div>
			<div className='flex flex-row  bg-red-400'>
				<Sidebar />
				<Routes>
					<Route path='/Portfolio' element={<Home />} />			
					<Route path='/about' element={<About />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/techstack' element={<Techstack />} />
				</Routes>
			</div>
			<Bottombar />
		</Router>
	);
}

export default Main;
