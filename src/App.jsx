import './index.css';
import './app.css';
import Header from './Components/Header';
import CV from './Components/CV';
import Privacy from './Components/Privacy';
import Home from './Components/Home';
import Photos from './Components/Photos';
import {Link, Route, Routes, Outlet} from "react-router";

function Layout() {
	return (
	<div>
	<Header name="M Wong" sub_title="My personal site" />	
	<nav className="links">
	<Link className="link" to="/">Home</Link> | <Link className="link" to="/cv">CV</Link> | <Link className="link" to="/photos">Photos</Link> | <Link className="link" to="/privacy">Privacy</Link> 
	</nav>
	<main>
	<Outlet />
	</main>
	</div>
	);
}

export default function App() {
    return (	
	<Routes>
	<Route element={<Layout />}>
	  <Route index element={<Home />} />
	  <Route path="cv" element={<CV />} />   	
	  <Route path="photos" element={<Photos />} />
	  <Route path="privacy" element={<Privacy />} />
	</Route>
	</Routes>
	);
}

