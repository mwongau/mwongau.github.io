import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconButton from '@material-ui/core/IconButton';
import {faGithub} from "@fortawesome/free-brands-svg-icons";
import EmailIcon from '@material-ui/icons/Email';

function Privacy() {
  return (
    <div className="Privacy">	
	<h1>Privacy Policy</h1>
	<h2>Who we are</h2>
	<p>Our website address is: https://mwongau.github.io</p>
	<p>This is the personal site of M. Wong.</p>
	
	<h2>Contact</h2>
	<p><IconButton onClick={()=> window.open("https://github.com/mwongau", "_blank")}><FontAwesomeIcon icon={faGithub}/></IconButton> 
	GitHub: https://github.com/mwongau </p>
	<p><IconButton href="mailto:mwong@mwongsite.com"><EmailIcon/></IconButton>
	Email: mwong[at]mwongsite.com, replace [at] by @ </p>
	<p>If you contact the site author by email, your name, 
		email address and other information you provide to the 
		site author will be stored in the email account of the site 
		author.</p>
		
	<h2>Cookies</h2>
	<p>This website might use cookies to improve your experience of 
	using the site. If you continue to use this site, it will be 
	assumed that you agree to the use of cookies.</p>

	<p>The above privacy policy can be changed at any time by 
	the site author without giving notice.</p>	
	</div>
);
}
export default Privacy;	
