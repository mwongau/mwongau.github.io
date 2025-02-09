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
	<nav className="bg-gray-100 font-semibold">
	<ul className="flex">
	<li className="mx-3">	
	<Link className="link" to="/">Home</Link>
	</li>
	<li className="mx-3">
	<Link className="link" to="resume">CV</Link>
	</li>
	<li className="mx-3">
	<Link className="link" to="photos">Photos</Link>
	</li>
	<li className="mx-3">
	<Link className="link" to="privacy">Privacy</Link>
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
