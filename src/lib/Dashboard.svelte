<script>
  import { supabase } from "./createSupabase";
  import { user } from "./stores.svelte";
  import { Link } from "svelte-routing";
  import { getUserId } from "./auth.svelte";
let buildingName = "";
let unitType = "";
  async function addNewBuilding(e){
    e.preventDefault();
    const aptId = await getUserId(user.id);
    let {data: Building, error} = await supabase
    .from('Building')
    .insert([
        {Name: buildingName, ApartmentId: aptId[0].Id}
    ])
    .select()
    
  }
  
</script>

{#if user.isLoggedIn}
  <!-- Container to add Building and Unit -->
  <div class="grid lg:grid-cols-2 xl:grid-cols-3 font-mono">
    <div class="grid justify-center items-center align-middle my-10">
      <p class="text-4xl text-center my-5">Add Building</p>
      <form
      onsubmit={addNewBuilding}
        class="w-96 grid justify-center items-center align-middle py-10 gap-4 bg-gray-100 shadow-md"
      >
        <div>
          <label for="">Building Name/# </label>
          <input type="text" name="building_info" bind:value={buildingName} id="" class="bg-gray-300 rounded" />
        </div>
        <div class="mx-auto">
          <button
            type="submit"
            class="p-2 rounded bg-blue-300 text-white font-semibold hover:bg-blue-400 transition-all"
            >Add Building</button
          >
        </div>
      </form>
    </div>

    <div class="grid justify-center items-center align-middle my-10">
      <p class="text-4xl text-center my-5">Add Unit Type</p>
      <form
        action=""
        method="post"
        class="w-96 grid justify-center items-center align-middle py-10 gap-4 bg-gray-100 shadow-md"
      >
        <div>
          <label for="">Unit Type </label>
          <input type="text" name="" id="" class="bg-gray-300 rounded" />
        </div>
        <div>
          <label for="">Unit Price </label>
          <input type="number" step=".01" name="" id="" class="bg-gray-300 rounded" />
        </div>
        <div class="grid">
          <label for="" class="text-center">Unit Description </label>
          <!-- <input type="number" name="" id="" class="bg-gray-300 rounded" /> -->
           <textarea name="" id="" class="bg-gray-300 rounded"></textarea>
        </div>
        <div class="mx-auto">
          <button
            type="submit"
            class="p-2 rounded bg-blue-300 text-white font-semibold hover:bg-blue-400 transition-all"
            >Add Type</button
          >
        </div>
      </form>
    </div>

    <div
      class="grid justify-center items-center align-middle my-10 lg:col-span-2 xl:col-span-1"
    >
      <p class="text-4xl text-center my-5">Add New Apartment</p>
      <form
        action=""
        method="post"
        class="w-96 grid justify-center items-center align-middle py-10 gap-4 bg-gray-100 shadow-md"
      >
        <div>
          <label for="">Apartment # </label>
          <input type="text" name="" id="" class="bg-gray-300 rounded" />
        </div>
        <div class="grid">
          <select name="" id="" class="text-center bg-gray-300 rounded py-1">
            <option value="">Building</option>
          </select>
        </div>
        <div class="grid">
          <select name="" id="" class="text-center bg-gray-300 rounded py-1">
            <option value="">Unit Type</option>
          </select>
        </div>
        <div class="mx-auto">
          <button
            type="submit"
            class="p-2 rounded bg-blue-300 text-white font-semibold hover:bg-blue-400 transition-all"
            >Add Type</button
          >
        </div>
      </form>
    </div>
  </div>
{:else}
  <div class="my-20 font-mono">
    <div
      class="bg-gray-300 w-fit px-10 mx-auto py-5 rounded shadow-lg grid justify-center items-center align-middle"
    >
      <p class="text-4xl">Unable To Access</p>
      <Link
        to="/login"
        class="w-fit mx-auto my-5 text-xl py-1 px-2 bg-green-400 rounded text-white hover:bg-green-500 transition-all font-semibold"
        >Log In</Link
      >
    </div>
  </div>
{/if}
