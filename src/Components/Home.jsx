import { useState } from 'react';
import Cookies from 'js-cookie';

export default function Home() {
  const [text, setText] = useState(true);
  function handleClick(){ 
	Cookies.set('cookiesButtonClicked', 'clicked', { expires: 1 });
	setText(false);
  }	
  
  const value = Cookies.get('cookiesButtonClicked');
  let mystyle;
  if (value === "clicked" || !{text})
    mystyle = {display:"none"};
  else 
    mystyle = {display:"inline"};
  
  return (
	<div>
		<h2 className="text-2xl py-2 text-purple-800">Home</h2>		
		<div>
		<p>Welcome to my personal website. I am a researcher in computer vision & machine 
		learning with Ph.D in Computer Science, M.Sc & B.Sc(Hons.) in Electrical and Electronic 
		Engineering. I am also interested in web app development. This site is built by using 
		React, Vite, Javascript, HTML and Tailwind CSS. This site is hosted by GitHub Pages.</p>					
		</div>
		
		<p className="bg-gray-100" style={mystyle}> This site uses cookies to improve your browsing 
		experience. If you continue to use this site, it will be assumed you agree to the use 
		of cookies.  
		<button className="px-3 border-2 bg-sky-200" onClick={handleClick}> OK </button></p>
	</div>	
  );
}
