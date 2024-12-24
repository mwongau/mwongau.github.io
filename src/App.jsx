import './index.css';
import './app.css';
import Header from './Components/Header';
import CV from './Components/CV';
import Privacy from './Components/Privacy';
import Home from './Components/Home';
import Photos from './Components/Photos';
import { Link, Route, Routes } from "react-router-dom";


export default function App() {
    return (	
	<div>
	<Header name="M Wong" sub_title="My personal site" />	
	
	<nav class="bg-gray-100 font-semibold">
	<ul class="flex">
	<li class="mx-3">	
    <Link class="text-blue-500 hover:text-red-900 text-bold" to="/">Home</Link>
	</li>
	<li class="mx-3">
    <Link class="text-blue-500 hover:text-red-900" to="resume">CV</Link>
	</li>
	<li class="mx-3">
    <Link class="text-blue-500 hover:text-red-900" to="photos">Photos</Link>
	</li>
	<li class="mx-3">
    <Link class="text-blue-500 hover:text-red-900" to="privacy">Privacy</Link>
	</li>
	</ul>
	</nav>
	
	<Routes>
       <Route path="/" element={<Home />} />
       <Route path="resume" element={<CV />} />   	
	   <Route path="photos" element={<Photos />} />
	   <Route path="privacy" element={<Privacy />} />
	</Routes>
    </div>
    );
}
