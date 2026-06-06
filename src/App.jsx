import './index.css';
import './app.css';
import Header from './Components/Header';
import CV from './Components/CV';
import Privacy from './Components/Privacy';
import Home from './Components/Home';
import Projects from './Components/Projects';
import {Link, Route, Routes, Outlet} from "react-router";

function Layout() {
	return (
	<div>
	<Header name="M Wong" sub_title="Researcher in Computer Vision & Machine Learning" />	
	<nav className="links">
	<Link className="link" to="/">Home</Link> | 
	<Link className="link" to="/cv">CV</Link> | 
	<Link className="link" to="/projects">Projects</Link> | 
	<Link className="link" to="/privacy">Privacy</Link> 
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
	  <Route path="projects" element={<Projects />} />	  
	  <Route path="privacy" element={<Privacy />} />
	</Route>
	</Routes>
	);
}
