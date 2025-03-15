<script>
  import {  Link } from "svelte-routing";
  let links = [['/','Home'],['/login','Login'],['/dashboard','Dashboard'],['/units/1','Units']]
</script>

<nav class="bg-stone-200 p-2 flex justify-between">
  <a href="/">
    <img src="https://placehold.co/50x50" alt="Logo">
  </a>
  <div class="flex gap-0.5">
    {#each links as link}
      <Link class="pt-1 pb-1 pe-3 ps-3 hover:bg-stone-300 content-center rounded-sm hover:shadow-sm active:shadow-none active:inset-shadow-sm inset-shadow-stone-400" to={link[0]}>{link[1]}</Link>
    {/each}
  </div>
</nav>


<style>
</style>