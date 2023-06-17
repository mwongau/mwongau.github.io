<!-- +layout.svelte -->
<script>
import Header from '$lib/components/Header.svelte'
import Nav from '$lib/components/Nav.svelte'
import '$lib/styles/style.css'

//import { base } from "$app/paths"
</script>

<Header />
<Nav />

<main>
  <slot />
</main>

<footer>This site might use cookies to improve your browsing experience. If you continue to use this site,
it will be assumed you agree to the use of cookies. This site is under construction.</footer>


