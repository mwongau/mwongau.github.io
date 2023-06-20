<script>
  import { base } from "$app/paths";
</script>  

<nav>
    <ul>
      <li>
        <a href="{base}/">Home</a>
      </li>
	  <li>
        <a href="{base}/posts">Blog</a>
      </li>
      <li>
        <a href="{base}/cv">CV</a>
      </li>
      <li>
        <a href="{base}/photos">Photos</a>
      </li>
	  <li>
        <a href="{base}/privacy">Privacy</a>
      </li>
    </ul>
  </nav>

<style>
nav {
  padding: 1rem;
  background: AliceBlue;
}

ul {
  margin: 0;
  list-style-type: none;
  display: flex;
  gap: 1rem;
}

a {
  text-decoration: none;
}
</style>
