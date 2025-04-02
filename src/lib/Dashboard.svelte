<script>
  import { supabase } from "./createSupabase";
  import { user } from "./stores.svelte";
  import { Link, navigate } from "svelte-routing";
  import { getUserId } from "./auth.svelte";
  import {
    getAllBuildings,
    getAllUnitTypes,
    getAllRenters,
  } from "./dashboard.svelte.js";

  let buildingName = "";
  let unitType = "";
  let unitPrice = 0;
  let unitDesc = "";
  let apartment = "";
  let buildingNumber = "";
  let unitNumber = "";

  let buildings = [];
  let unitTypes = [];
  let renters = [];

  async function getBuildings() {
    buildings = await getAllBuildings();
  }
  async function getAptTypes() {
    unitTypes = await getAllUnitTypes();
  }
  async function getRenters() {
    renters = await getAllRenters();
  }
  getBuildings();
  getAptTypes();
  getRenters();
  console.clear();

  async function addNewBuilding(e) {
    e.preventDefault();
    const aptId = await getUserId(user.id);
    let { data: Building, error } = await supabase
      .from("Building")
      .insert([{ Name: buildingName, ApartmentId: aptId }])
      .select();
    navigate("/");
  }

  async function addNewUnitType(e) {
    e.preventDefault();
    const aptId = await getUserId(user.id);
    let { data: ApartmentType, error } = await supabase
      .from("ApartmentType")
      .insert([
        {
          Type: unitType,
          ApartmentId: aptId,
          Rent: unitPrice,
          Description: unitDesc,
        },
      ])
      .select();
    navigate("/");
  }

  async function addNewApartment(e) {
    e.preventDefault();
    const aptId = await getUserId(user.id);
    let { data: Apartment, error } = await supabase
      .from("Unit")
      .insert([
        {
          Name: apartment,
          ApartmentTypeId: unitNumber,
          BuildingId: buildingNumber,
          ComplexId: aptId,
        },
      ])
      .select();
    navigate("/");
  }

  async function removeRenter(e){
  e.preventDefault();
  const formData = new FormData(e.target);
  const id = formData.get('renterId');
  let {error} = await supabase
  .from('Renter')
  .delete()
  .eq('Id', id)
  .select()
  navigate("/");
}

async function updateUnitStatus(e){
  e.preventDefault();
  const formData = new FormData(e.target);
  const unitId = formData.get('unitId');
}
</script>

{#if user.isLoggedIn}
  <!-- Container to add Building and Unit -->
  <div
    class="grid lg:grid-cols-2 xl:grid-cols-3 font-mono justify-center items-center align-middle"
  >
    <div class="grid justify-center items-center align-middle my-10">
      <p class="text-4xl text-center my-5">Add Building</p>
      <form
        onsubmit={addNewBuilding}
        class="w-96 grid justify-center items-center align-middle py-10 gap-4 bg-gray-100 shadow-md"
      >
        <div>
          <label for="">Building Name/# </label>
          <input
            type="text"
            name="building_info"
            bind:value={buildingName}
            id=""
            class="bg-gray-300 rounded"
            required
          />
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
        onsubmit={addNewUnitType}
        class="w-96 grid justify-center items-center align-middle py-10 gap-4 bg-gray-100 shadow-md"
      >
        <div>
          <label for="">Unit Type </label>
          <input
            type="text"
            name=""
            bind:value={unitType}
            class="bg-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label for="">Unit Price </label>
          <input
            type="number"
            step=".01"
            name=""
            bind:value={unitPrice}
            class="bg-gray-300 rounded"
            required
          />
        </div>
        <div class="grid">
          <label for="" class="text-center">Unit Description </label>
          <!-- <input type="number" name="" id="" class="bg-gray-300 rounded" /> -->
          <textarea
            name=""
            id=""
            bind:value={unitDesc}
            class="bg-gray-300 rounded"
            required
          ></textarea>
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
        onsubmit={addNewApartment}
        class="w-96 grid justify-center items-center align-middle py-10 gap-4 bg-gray-100 shadow-md"
      >
        <div>
          <label for="">Apartment # </label>
          <input
            type="text"
            name=""
            id=""
            class="bg-gray-300 rounded"
            bind:value={apartment}
            required
          />
        </div>
        <div class="grid">
          <select
            name=""
            id=""
            bind:value={buildingNumber}
            class="text-center bg-gray-300 rounded py-1"
            required
          >
            <option
              value=""
              disabled={buildings.length > 0}
              selected={buildingNumber === ""}>Choose a building</option
            >
            {#if buildings.length > 0}
              {#each buildings as building (building.Id)}
                <option value={building.Id}>{building.Name}</option>
              {/each}
            {:else}
              <option value="">Loading...</option>
            {/if}
          </select>
        </div>
        <div class="grid">
          <select
            name=""
            id=""
            class="text-center bg-gray-300 rounded py-1"
            bind:value={unitNumber}
            required
          >
            <option
              value=""
              disabled={unitTypes.length > 0}
              selected={unitNumber === ""}>Choose apartment type</option
            >
            {#if unitTypes.length > 0}
              {#each unitTypes as unit (unit.Id)}
                <option value={unit.Id}>{unit.Type}</option>
              {/each}
            {:else}
              <option value="">Loading...</option>
            {/if}
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
  <div>
    <div>
        {#if renters.length > 0}
        <table class="mx-auto text-center my-10 bg-white rounded-xl border">
          <thead>
            <tr>
              <th class="py-2 px-5">Renter Name</th>
              <th class="py-2 px-5 border-x">Renter Email</th>
              <th class="py-2 px-5 border-x">Renter Phone</th>
              <th class="py-2 px-5 border-x">Unit</th>
              <th class="py-2 px-5 border-x">Approve/Delete</th>
            </tr>
          </thead>
          <tbody>
            {#each renters as renter (renter.UnitId)}
                  <tr>
                  <td class="border-t py-2 px-5">{renter.Fullname}</td>
                  <td class="border-t py-2 px-5 border-x">{renter.Email}</td>
                  <td class="border-t py-2 px-5 border-x">{renter.Phone}</td>
                  <td class="border-t py-2 px-5 border-x">{renter.Unit.Name}</td>
                  <td class="border-t py-2 px-5 flex gap-5">
                    <form onsubmit={updateUnitStatus}>
                      <input type="hidden" value={renter.UnitId} name="unitId">
                      <button type="submit" class="text-blue-400 font-semibold cursor-pointer">Approve</button>
                    </form>
                    <form onsubmit={removeRenter}>
                      <input type="hidden" value={renter.Id} name="renterId">
                      <button type="submit" class="text-red-400 font-semibold cursor-pointer">Delete</button>
                    </form>
                  </td>
                </tr>
                {/each}
            </tbody>
          </table>
        {:else}
        <p>No Renter Information Available</p>
        {/if}
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
