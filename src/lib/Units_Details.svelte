<script>
    import { Link } from 'svelte-routing';
    import { onMount } from "svelte";
    
    let isMenuOpen = false; 
   
    let requests = [
      { applicant: "John Doe", apartment: "Apartment 101 / Building 2", approved: false },
    ];
    let units = [
        {
            building: "Building 1",
            unitNumber: "101",
            description: "Spacious 2-bedroom apartment with a balcony. This modern apartment features high ceilings, large windows providing natural light, and an open-concept living area. The kitchen comes fully equipped with stainless steel appliances and granite countertops. The master bedroom includes an en-suite bathroom and walk-in closet.",
            price: "$1200/month",
            unitType: "Double Bed Room",
            image: "/src/assets/apartment3.jpg"
        }
    ];
  
        

    function handleRequest(unit) {
        console.log(`Requesting unit: ${unit.unitNumber} in ${unit.building}`);
        // Add your request logic here
    }
</script>

<div class="min-h-screen bg-gray-50 flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
    <!-- Add this title section -->
    <h1 class="text-4xl font-bold text-gray-900 mb-12 text-center">
        Unit Details
    </h1>

    <div class="max-w-4xl w-full">
        {#each units as unit}
            <div class="bg-white shadow-2xl rounded-lg overflow-hidden">
                <!-- Unit Image -->
                <div class="relative h-96">
                    <img 
                        src={unit.image} 
                        alt={`${unit.building} - Unit ${unit.unitNumber}`}
                        class="w-full h-full object-cover"
                    />
                    <div class="absolute top-4 right-4 bg-white px-4 py-2 rounded-lg shadow-md">
                        <span class="text-2xl font-bold text-gray-900">{unit.price}</span>
                    </div>
                </div>
                
                <!-- Unit Details -->
                <div class="p-8">
                    <div class="mb-6">
                        <h1 class="text-3xl font-bold text-gray-900 mb-2">
                            {unit.building} - Unit {unit.unitNumber}
                        </h1>
                        <p class="text-xl text-indigo-600 font-semibold">
                            {unit.unitType}
                        </p>
                    </div>
                    
                    <p class="text-gray-600 text-lg leading-relaxed mb-8">
                        {unit.description}
                    </p>
                    
                    <div class="flex justify-center">
                        <button
                            on:click={() => handleRequest(unit)}
                            class="bg-indigo-600 text-white text-lg py-4 px-8 rounded-lg hover:bg-indigo-700 transition-colors duration-200 transform hover:scale-105"
                        >
                            Request This Unit
                        </button>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>

<footer class="bg-gray-800">
    <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:py-6 lg:px-8">
      <p class="text-center text-base text-gray-400">
        &copy; 2025. All Rights Reserved. FloorBooking is a product of FloorBooking Inc.
      </p>
    </div>
</footer>
  
<style>
    /* Add any custom styles here */
</style>


<footer class="bg-gray-800">
    <div class="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:py-6 lg:px-8">
      <p class="text-center text-base text-gray-400">
        &copy; 2025. All Rights Reserved. FloorBooking is a product of FloorBooking Inc.
      </p>
    </div>
  </footer>