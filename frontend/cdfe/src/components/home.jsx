import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { Link } from "react-router-dom";

const Home = () => {
return (
	<div>
		<div className="bg-gradient-to-tr from-purple-400 to-green-700 h-96 w-full relative">
			<img src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="car img"
				className="w-full h-full object-cover absolute mix-blend-soft-light"/>
			<div><Link to="/about">
			<button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded absolute top-0 right-0 h-10 w-30">
  				More Info
			</button></Link></div>
			<p className="px-40 py-20">
				<h1 className="text-blue-800 text-4xl font-bold">
				Car Detector with %93 Accuracy</h1>
				<h2 className="text-white text-3xl font-light">
				<p>Don't Ask  Car Enthusiasts, Ask Us!</p>
				<p>we have build an automative api with %93 accuracy</p>
				<p>that will recognize the year, model and color</p>
				<p>of most cars since 1928.</p></h2>
			</p>
		</div>
	<br></br>
	<input type="file" class="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-8
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-violet-50 file:text-violet-700
      hover:file:bg-violet-100
    "/>
	<div class="flex justify-center w-40 py-40">
    <label for="dropzone-file" class="flex flex-col justify-center items-center w-full h-64 bg-gray-50 rounded-lg border-2 border-gray-300 border-dashed cursor-pointer dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
        <div class="flex flex-col justify-center items-center pt-5 pb-6">
            <svg class="mb-3 w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
            <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 
	</div>
);
};

export default Home;
