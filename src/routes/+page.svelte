<script>
import { browser } from "$app/environment"

let showText = true
function acceptCookies(){
   if (browser) {
      document.cookie = "acceptCookiesButtonClicked=buttonClicked";
   } 
   showText = false   
}

if (browser) {
   let idx = document.cookie.indexOf('acceptCookiesButtonClicked=')
   if (idx != -1) 
      showText = false
}
</script>

<h1>Home</h1>

<div>
<p>Welcome to my personal site. I am a researcher in computer vision and machine learning with Ph.D in Computer Science, 
M.Sc & B.Sc(Hons.) in Electronic Engineering. I am also interested in web app development. This site is built by using 
SvelteKit, Javascript, HTML and CSS. This site includes a static Markdown blog. This site is hosted by GitHub Pages.</p>	
</div>	

<p>
  {#if showText}
     This site might use cookies to improve your browsing experience. If you continue to use this 
	 site, it will be assumed you agree to the use of cookies. 
	 <button on:click={acceptCookies}>Accept cookies</button>
  {/if}
</p>	
