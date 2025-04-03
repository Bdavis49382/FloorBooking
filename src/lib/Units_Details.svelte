<script>
    import { getUnit } from "./complexes.svelte";
    import { navigate } from "svelte-routing";

    let { unitId } = $props();
    let unitPromise = $state();
    
    unitPromise = getUnit(unitId);

    // Add debug logging
    function handleRequest(unit) {
        console.log('Unit data:', unit); // Debug log
        if (!unit.Id) {
            console.error('ComplexId is missing from unit data');
            return;
        }
        navigate(`/UnitRequest/${unit.Id}`);
    }
</script>

{#await unitPromise}
    loading...
{:then unit} 
{#if unit}
    
    <div class="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
        <!-- Add this title section -->
        <h1 class="text-4xl font-bold text-gray-900 mb-12 text-center">
            Unit Details
        </h1>

        <div class="max-w-4xl w-full">
                <div class="bg-white shadow-2xl rounded-lg overflow-hidden">
                    <!-- Unit Image -->
                    <div class="relative h-96">
                        <img 
                            src={unit.image} 
                            alt={`${unit.Building.Name} - Unit ${unit.Name}`}
                            class="w-full h-full object-cover"
                        />
                        <div class="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md">
                            <span class="text-2xl font-bold text-gray-900">${unit.ApartmentType.Rent}/month</span>
                        </div>
                    </div>
                    
                    <!-- Unit Details -->
                    <div class="p-8">
                        <div class="mb-6">
                            <h1 class="text-3xl font-bold text-gray-900 mb-2">
                                {unit.Building.Name} - Unit {unit.Name}
                            </h1>
                            <p class="text-xl text-indigo-600 font-semibold">
                                {unit.ApartmentType.Type}
                            </p>
                        </div>
                        
                        <p class="text-gray-600 text-lg leading-relaxed mb-8">
                            {unit.ApartmentType.Description}
                        </p>
                        
                        <div class="flex justify-center">
                            <button
                                onclick={() => handleRequest(unit)}
                                class="bg-indigo-600 text-white text-lg py-4 px-8 rounded-lg hover:bg-indigo-700 transition-colors duration-200 transform hover:scale-105"
                            >
                                Request This Unit
                            </button>
                        </div>
                    </div>
                </div>
        </div>
    </div>
{:else}
<p>Unit not found. Perhaps try again or try a different unit.</p>
{/if}

{/await}