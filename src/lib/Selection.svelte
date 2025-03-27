<script>
  import { getComplexes } from "./complexes.svelte";

    let complexId = $state("0");
    let complexes = $state();
    complexes = getComplexes();

</script>

{#await complexes}
<div class="flex justify-center content-center full-page flex-wrap">
    <div class="block h-1/5">
        loading...
</div>
</div>
{:then loadedComplexes} 
{#if complexId != '0'}
    
<form action="" class="mt-2 ms-2">
    <select bind:value={complexId} name="complex" id="complex" class="border border-stone-300 rounded">
        <option value="0" hidden disabled>Select a Complex</option>
        {#each loadedComplexes as complex}
            <option value="{complex.Id}">{complex.Name}</option>
        {/each}
    </select>
</form>
<h1 class="text-center text-3xl mb-5">{loadedComplexes.filter(c => c.Id == complexId)[0]?.Name}</h1>
<section class="flex gap-2 flex-col md:flex-row max-w-md m-auto justify-center flex-wrap">
    {#each loadedComplexes.filter(c => c.Id == complexId)[0]?.Building as building}
        <div class="bg-stone-100 shadow-md p-2 max-w-fit m-auto">
            <h2 class="text-xl p-1">{building.Name}</h2>
            <div class="flex flex-row gap-1 flex-wrap w-25">
                {#each building.Unit as unit}
                    {#if !unit.IsAvailable}
                        <div class="border-1 border-stone-200 text-center bg-stone-600 text-white">{unit.Name}</div>
                    {:else}
                        <a href="units/{complexId}/{unit.Id}">
                            <div class="border-1 border-stone-200 text-center bg-stone-50 cursor-pointer">{unit.Name}</div>
                        </a>
                    {/if}
                {/each}
            </div>
        </div>
    {/each}
</section>
{:else}

<div class="flex justify-center content-center full-page flex-wrap">
    <div class="flex h-1/5 bg-stone-100 justify-center rounded-sm shadow-sm flex-col p-40">
        <h2 class="text-center text-3xl">Units</h2>
        <form action="" class="p-3 flex content-center flex-wrap">
            <select bind:value={complexId} name="complex" id="complex" class="border border-stone-300 rounded">
                <option value="0" hidden disabled>Select a Complex</option>
                {#each loadedComplexes as complex}
                    <option value="{complex.Id}">{complex.Name}</option>
                {/each}
            </select>
        </form>
    </div>
</div>

{/if}
{/await}


<style>
    .full-page {
        height: 100vh;
        background-color: rgba(155,155,155,.2);
    }
</style>