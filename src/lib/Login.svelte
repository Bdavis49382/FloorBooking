<script>
    import { supabase } from "./createSupabase";
    import { login, register} from "./auth.svelte";
    import { navigate } from "svelte-routing";
  import { user } from "./stores.svelte";
    let email = "";
    let password = "";
    let complex = "";
    let confirm = "";
    async function handleLogin(e) {
        e.preventDefault();
        login(email, password);
    }
          

    async function alreadyHasComplex(uuid) {
        
        let { data: Complex, error } = await supabase
        .from('Complex')
        .select('*')
        return Complex.map(obj => obj.Auth).includes(uuid);

    }

    async function handleRegister(e) {
        e.preventDefault();
        
        const userData = await register(email, password);
        
        if (!userData) {
            return;
        }
        user.isLoggedIn = true;
        user.id = userData.user.id;

        if (await alreadyHasComplex(userData.user.id)) {
            console.error('user already has complex, logging in')
            navigate('/');
            return;
        }
        const { data, error } = await supabase
        .from('Complex')
        .insert([
            { Name: complex, Auth: userData.user.id },
        ])
        .select()
        navigate('/');
    }
</script>


<div class="md:flex md:m-auto md:w-6/12 md:gap-5 pt-2">
    <form onsubmit={handleLogin} class="flex flex-col gap-4 p-5 max-w-sm m-auto md:m-0 shadow-sm bg-stone-50">
        <h1 class="text-center">Login</h1>
        <fieldset class="flex">
            <label for="email" class="mr-auto">Email</label>
            <input type="email" name="email" bind:value={email} required class="border-stone-300 border bg-stone-200 rounded-sm justify-self-end">
        </fieldset>
        <fieldset class="flex">
            <label for="password" class="mr-auto">Password</label>
            <input type="password" name="password" bind:value={password} required class="border-stone-300 border bg-stone-200 rounded-sm">
        </fieldset>
        <button type="submit" class="text-center cursor-pointer bg-stone-200 shadow shadow-stone-50 border-stone-300 border block w-13 rounded m-auto">Login</button>
    </form>

    <form onsubmit={handleRegister} class="flex flex-col gap-4 p-5 max-w-sm m-auto md:m-0 shadow-sm bg-stone-50">
        <h1 class="text-center">Register</h1>
        <fieldset class="flex justify-between">
            <label for="complex" class="mr-auto">Complex Name</label>
            <input type="text" name="complex" id="complex" bind:value={complex} required class="border-stone-300 border bg-stone-200 rounded-sm">
        </fieldset>
        <fieldset class="flex">
            <label for="email" class="mr-auto">Email</label>
            <input type="email" name="email" bind:value={email} required class="border-stone-300 border bg-stone-200 rounded-sm justify-self-end">
        </fieldset>
        <fieldset class="flex justify-between">
            <label for="password" class="mr-auto">Password</label>
            <input type="password" name="password" bind:value={password} required class="border-stone-300 border bg-stone-200 rounded-sm">
        </fieldset>
        <fieldset class="flex">
            <label for="confirm" class="mr-auto">Confirm Password</label>
            <input type="password" name="confirm" id="confirm" bind:value={confirm} required class="border-stone-300 border bg-stone-200 rounded-sm">
        </fieldset>
        <button type="submit" class="text-center cursor-pointer bg-stone-200 shadow shadow-stone-50 border-stone-300 border block w-18 rounded m-auto">Register</button>
    </form>
</div>
 
<footer class="bg-gray-800">
    <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:py-6 lg:px-8">
      <p class="text-center text-base text-gray-400">
        &copy; 2025. All Rights Reserved. FloorBooking is a product of FloorBooking Inc.
      </p>
    </div>
  </footer>