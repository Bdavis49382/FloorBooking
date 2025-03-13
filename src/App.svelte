<script>
  import { Router, Link, Route} from "svelte-routing";
  import Counter from "./lib/Counter.svelte";

  export let url = "";
</script>

<Router { url }>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/units/1">Units</Link>
  </nav>
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
      <p>Home page component will go here.</p>
    </Route>
  </div>

</Router>


<style>
</style>
