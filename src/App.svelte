<script>
  import { Router, Route} from "svelte-routing";
  import NavBar from "./lib/NavBar.svelte";

  export let url = "";
</script>

<Router { url }>
  <NavBar />
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
