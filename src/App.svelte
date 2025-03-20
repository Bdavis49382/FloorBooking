<script>
  import { Router, Link, Route } from "svelte-routing";
  import Counter from "./lib/Counter.svelte";
  import Home from "./lib/Home.svelte"; // Import the Home component
  let isMenuOpen = false; 

  export let url = "";
</script>

<Router {url}>
  <!-- <nav>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/units/1">Units</Link>
  </nav> -->

  <header class="bg-white shadow">
    <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
      <h1 class="text-3xl font-bold text-gray-900 text-center md:text-left w-full">
        <Link to="/">Floor Booking</Link>
      </h1>
      <nav class="hidden md:flex">
        <Link to="/" class="text-gray-900 hover:text-indigo-600 mx-2">Home</Link>
        <Link to="/login" class="text-gray-900 hover:text-indigo-600 mx-2">Login</Link>
        <Link to="/dashboard" class="text-gray-900 hover:text-indigo-600 mx-2">Dashboard</Link>
        <Link to="/units/1" class="text-gray-900 hover:text-indigo-600 mx-2">Units</Link>
      </nav>
      <button 
        class="md:hidden text-gray-900 mt-4 md:mt-0"
        on:click={() => isMenuOpen = !isMenuOpen} 
        aria-label="Toggle Menu"
      >
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>
    {#if isMenuOpen}
      <nav class="md:hidden bg-white shadow-lg text-center">
        <Link to="/" class="block text-gray-900 hover:text-indigo-600 px-4 py-2">Home</Link>
        <Link to="/login" class="block text-gray-900 hover:text-indigo-600 px-4 py-2">Login</Link>
        <Link to="/dashboard" class="block text-gray-900 hover:text-indigo-600 px-4 py-2">Dashboard</Link>
        <Link to="/units/1" class="block text-gray-900 hover:text-indigo-600 px-4 py-2">Units</Link>
      </nav>
    {/if}
  </header>
  <div>
    <Route path="/login">
      <p>Login page component will go here.</p>
    </Route>
    <Route path="/dashboard">
      <p>Dashboard page component will go here.</p>
    </Route>
    <Route path="/units/:id" let:params>
      <p>Units page component for complex {params.id} will go here.</p>
    </Route>
    <Route path="/">
      <Home /> <!-- Use the Home component here -->
    </Route>
  </div>
</Router>

<style>
</style>
