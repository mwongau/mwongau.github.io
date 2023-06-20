<script>
export let title
export let date
</script>

<article>
  <h2>Title: {title}</h2>

  <p>Published: {date}</p>

  <slot />
</article>