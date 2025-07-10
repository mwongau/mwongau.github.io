import './index.css';
import './app.css';
import Header from './Components/Header';
import CV from './Components/CV';
import Privacy from './Components/Privacy';
import Home from './Components/Home';
import Photos from './Components/Photos';
import { Link, Route, Routes } from "react-router";
import { Outlet } from "react-router";

//import ReactDOM from "react-dom/client";
//import { HashRouter, Routes, Route } from "react-router-dom";
//import Layout from "./pages/Layout";
//import Home from "./pages/Home";
//import Blogs from "./pages/Blogs";
//import Contact from "./pages/Contact//";
//import NoPage from "./pages/NoPage";


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
	<Link className="link" to="cv">CV</Link>
	</li>
	<li>
	<Link className="link" to="photos">Photos</Link>
	</li>
	<li>
	<Link className="link" to="privacy">Privacy</Link>
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
	<Route path="/" element={<Layout />}>
	  <Route index element={<Home />} />
	  <Route path="cv" element={<CV />} />   	
	  <Route path="photos" element={<Photos />} />
	  <Route path="privacy" element={<Privacy />} />
	</Route>
	</Routes>
	</div>
	);
}

/********************************/
// index.jsx or main.jsx


export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);



