import './index.css';
import './app.css';
import Header from './Components/Header';
import CV from './Components/CV';
import Privacy from './Components/Privacy';
import Home from './Components/Home';
import Photos from './Components/Photos';
import {Link, Route, Routes, Outlet} from "react-router";
//import { Outlet } from "react-router";

function Layout() {
	return (
	<div>
	<Header name="M Wong" sub_title="My personal site" />	
	<nav className="links">
	<ul className="flex">
	<li>	
	<Link className="link" to="/">Home</Link>
	</li>
	<li>
	<Link className="link" to="/cv">CV</Link>
	</li>
	<li>
	<Link className="link" to="/photos">Photos</Link>
	</li>
	<li>
	<Link className="link" to="/privacy">Privacy</Link>
	</li>
	</ul>
	</nav>
	<Outlet />
	</div>
	);
}

export default function App() {
    return (	
	<div>
	<Routes>
	<Route element={<Layout />}>
	  <Route index element={<Home />} />
	  <Route path="cv" element={<CV />} />   	
	  <Route path="photos" element={<Photos />} />
	  <Route path="privacy" element={<Privacy />} />
	</Route>
	</Routes>
	</div>
	);
}

