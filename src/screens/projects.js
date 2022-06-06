import React from "react";
import Mainpagebar from "../components/mainpagebar";

function Projects() {
	return (
		<div className='h-[calc(100vh-30px-25px)] w-[calc(100vw-50px)] md:w-5/6 bg-[#24292e] text-center scrollbar-hide overflow-y-auto overflow-x-hidden '>
			<Mainpagebar />

			<h1 className='mt-[1.5rem] ml-[1.5rem] text-[#E1E4E8] text-left  text-xl md:text-2xl font-bold'>
				Stuff I've Built So Far
			</h1>

			<div className='grid grid-flow-row'>
				<div className='grid grid-flow-row md:grid-flow-col items-center m-auto md:m-4  '>
					<div class='max-w-sm rounded overflow-hidden shadow-lg m-4'>
						<a href='https://github.com/Arijit-101/My-Spotify-Clone-App'>
							<img
								className='w-full  border-8 border-pink-400'
								src='spotify.png'
								alt='Spotify Clone'
							/>
							<div className='bg-[#ffffff1d] '>
								<div class='px-6 pb-2 bg-pink-400'>
									<div class='font-bold text-xl mb-2'>Spotify Clone</div>
								</div>
								<div class='px-6 pt-4 pb-2'>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										React
									</span>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										Tailwind Css
									</span>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										React Context Api
									</span>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										Spotify Api
									</span>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										Hero Icons
									</span>
								</div>
							</div>
						</a>
					</div>

					<div class='max-w-sm rounded overflow-hidden shadow-lg m-4'>
						<a href='https://arijit-101.github.io/Vscode-like-Portfolio/'>
							<img
								className='w-full  border-8 border-red-400'
								src='portfolio.png'
								alt='Vscode like Portfolio'
							/>
							<div className='bg-[#ffffff1d] '>
								<div class='px-6 pb-2 bg-red-400'>
									<div class='font-bold text-xl mb-2'>
										Vscode like Portfolio
									</div>
								</div>
								<div class='px-6 pt-4 pb-2'>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										React
									</span>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										Tailwind Css
									</span>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										Hero icons
									</span>
								</div>
							</div>
						</a>
					</div>

					<div class='max-w-sm rounded overflow-hidden shadow-lg m-4'>
						<a href='https://arijit-101.github.io/React-WeatherApp/'>
							<img
								className='w-full  border-8 border-orange-400'
								src='weather.png'
								alt='Weather App'
							/>
							<div className='bg-[#ffffff1d] '>
								<div class='px-6 pb-2 bg-orange-400'>
									<div class='font-bold text-xl mb-2'>Weather App</div>
								</div>
								<div class='px-6 pt-4 pb-2'>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										React
									</span>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										Material Ui
									</span>
									{/* <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span> */}
								</div>
							</div>
						</a>
					</div>
				</div>

				<div className='grid grid-flow-row md:grid-flow-col items-center m-auto md:m-4  '>
					<div class='max-w-sm rounded overflow-hidden shadow-lg m-4'>
						<a href='https://github.com/Arijit-101/Diabetes-Prediction-Using-ML'>
							<img
								className='w-full  border-8 border-emerald-300'
								src='diabetes.jpg'
								alt='Diabetes Prediction'
							/>
							<div className='bg-[#ffffff1d] '>
								<div class='px-6 pb-2 bg-emerald-300'>
									<div class='font-bold text-xl mb-2'>Diabetes Prediction</div>
								</div>
								<div class='px-6 pt-4 pb-2'>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										ML Algorithms
									</span>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										Numpy
									</span>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										Pandas
									</span>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										Seaborn
									</span>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										Scikit-learn
									</span>
								</div>
							</div>
						</a>
					</div>

					<div class='max-w-sm rounded overflow-hidden shadow-lg m-4'>
						<a href='https://github.com/Arijit-101/LGMVIP/tree/main/Iris%20Flower%20Prediction'>
							<img
								className='w-full  border-8 border-yellow-300'
								src='iris.png'
								alt='Iris Flower Classification'
							/>
							<div className='bg-[#ffffff1d] '>
								<div class='px-6 pb-4 bg-yellow-300'>
									<div class='font-bold text-xl pb-2 pt-2 '>
										Iris Flower Classification
									</div>
								</div>
								<div class='px-6 pt-4 pb-2'>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										ML Algorithms
									</span>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										Numpy
									</span>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										Pandas
									</span>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										Seaborn
									</span>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										Scikit-learn
									</span>
								</div>
							</div>
						</a>
					</div>

					<div class='max-w-sm rounded overflow-hidden shadow-lg m-4'>
						<a href='https://github.com/Arijit-101/ISL-Team-Songs-'>
							<img
								className='w-full  border-8 border-[#b9f2ff]'
								src='islteams.png'
								alt='Isl Team Songs'
							/>
							<div className='bg-[#ffffff1d] '>
								<div class='px-6 pb-2 bg-[#b9f2ff]'>
									<div class='font-bold text-xl mb-2'>Isl Team Songs</div>
								</div>
								<div class='px-6 pt-4 pb-2'>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										Python
									</span>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										Pygame
									</span>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										Tkinter
									</span>
								</div>
							</div>
						</a>
					</div>
				</div>

				<div className='grid grid-flow-row md:grid-flow-col items-center m-auto md:m-4  '>
					<div class='max-w-sm rounded overflow-hidden shadow-lg m-4'>
						<a href='https://arijit-101.github.io/Travel-website/'>
							<img
								className='w-full  border-8 border-[#e0b0ff]'
								src='travel.png'
								alt='Travel Website'
							/>
							<div className='bg-[#ffffff1d] '>
								<div class='px-6 pb-2 bg-[#e0b0ff]'>
									<div class='font-bold text-xl mb-2'>Travel Website</div>
								</div>
								<div class='px-6 pt-4 pb-2'>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										Html
									</span>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										Css
									</span>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										JavaScript
									</span>
								</div>
							</div>
						</a>
					</div>

					<div class='max-w-sm rounded overflow-hidden shadow-lg m-4'>
						<a href='https://arijit-101.github.io/CV_2020/myproj.html#title'>
							<img
								className='w-full  border-8 border-[#faebd7]'
								src='cv2020.png'
								alt='All about 2020'
							/>
							<div className='bg-[#ffffff1d] '>
								<div class='px-6 pb-2 bg-[#faebd7]'>
									<div class='font-bold text-xl mb-2'>All about 2020</div>
								</div>
								<div class='px-6 pt-4 pb-2'>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										Html
									</span>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										Css
									</span>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										Bootstrap
									</span>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										JavaScript
									</span>
								</div>
							</div>
						</a>
					</div>

					<div class='max-w-sm rounded overflow-hidden shadow-lg m-4'>
						<a href='https://arijit-101.github.io/Tindog-Website/'>
							<img
								className='w-full  border-8 border-[#f8c9c6e3]'
								src='tindog.png'
								alt='Tindog Website'
							/>
							<div className='bg-[#ffffff1d] '>
								<div class='px-6 pb-2 bg-[#f8c9c6e3]'>
									<div class='font-bold text-xl mb-2'>Tindog Website</div>
								</div>
								<div class='px-6 pt-4 pb-2'>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										Html
									</span>
									<span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>
										Css
									</span>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Projects;
