<script>
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./lib/Home.svelte"; // Import the Home component
  import Login from "./lib/Login.svelte";
  import Dashboard from "./lib/Dashboard.svelte";
  import Selection from "./lib/Selection.svelte";
  import UnitsDetails from "./lib/Units_Details.svelte";
  import UnitRequestForm from "./lib/UnitRequestForm.svelte";
  import Message from "./lib/Message.svelte";
  import { user } from "./lib/stores.svelte";
  import { checkLogin, logout } from "./lib/auth.svelte";
  let isMenuOpen = false; 
  export let url = "";
  checkLogin();
</script>

<Router {url}>
  
  <header class="bg-white shadow">
    <div class="flex flex-col justify-between items-center lg:px-8 max-w-7xl md:flex-row mx-auto px-4 py-6 sm:px-6">
      <h1 class="text-3xl text-center text-gray-900 w-full font-bold md:text-left">
        <Link to="/">Floor Booking</Link>
      </h1>
      <nav class="hidden md:flex">
        <Link to="/" class="text-gray-900 hover:text-indigo-600 mx-2">Home</Link>
        {#if user.isLoggedIn}
          <button onclick={logout} class="text-gray-900 hover:text-indigo-600 mx-2 cursor-pointer">Logout</button>
        {:else}
          <Link to="/login" class="text-gray-900 hover:text-indigo-600 mx-2">Login</Link>
        {/if}
        <Link to="/dashboard" class="text-gray-900 hover:text-indigo-600 mx-2">Dashboard</Link>
        <Link to="/units" class="text-gray-900 hover:text-indigo-600 mx-2">Units</Link>
      </nav>
      <button 
        class="text-gray-900 md:hidden md:mt-0 mt-4"
        onclick={() => isMenuOpen = !isMenuOpen} 
        aria-label="Toggle Menu"
      >
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
            d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>
    {#if isMenuOpen}
      <nav class="bg-white shadow-lg text-center md:hidden">
        <Link to="/" class="text-gray-900 block hover:text-indigo-600 px-4 py-2">Home</Link>
        {#if !user.isLoggedIn}
          <Link to="/login" class="text-gray-900 block hover:text-indigo-600 px-4 py-2">Login</Link>
        {:else}
          <button onclick={logout} class="text-gray-900 inline hover:text-indigo-600 px-4 py-2">Logout</button>
        {/if}
        <Link to="/dashboard" class="text-gray-900 block hover:text-indigo-600 px-4 py-2">Dashboard</Link>
        <Link to="/units" class="text-gray-900 block hover:text-indigo-600 px-4 py-2">Units</Link>
      </nav>
    {/if}
  </header>
  <div>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="/dashboard">
      <Dashboard />
    </Route>
    <Route path="/units">
      <Selection />
    </Route>
    <Route path="/">
      <Home /> <!-- Use the Home component here -->
    </Route>
    <Route path="/units/:complexId/:unitId" let:params>
      <UnitsDetails unitId={params.unitId}/>
    </Route>
    <Route path="/units/:complexId/:unitId/request" let:params>
      <UnitRequestForm unitId={params.unitId} />
    </Route>
    <Route path= "/UnitRequest/:unitId" let:params>
      <UnitRequestForm unitId={params.unitId} />

    </Route>
    <Route path="/request-success">
      <Message />

    </Route>
  </div>
</Router>
<footer class="bg-gray-800">
  <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:py-6 lg:px-8">
    <p class="text-center text-base text-gray-400">
      &copy; 2025. All Rights Reserved. Floor Booking is a product of Floor Booking Inc.
    </p>
  </div>
</footer>

<style>
</style>