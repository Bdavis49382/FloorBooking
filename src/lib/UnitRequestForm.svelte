<script>
    import { supabase } from "./createSupabase";
    import { navigate } from "svelte-routing";
    
 let {unitId} = $props();
    let formData = $state({
        Fullname: "",
        Email: "",
        Phone: "",
        UnitId: unitId,
        
    });

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const { data, error } = await supabase
                .from('Renter')
                .insert([formData]);

            if (error) throw error;

            

            navigate('/request-success');
        } catch (error) {
            console.error('Error submitting request:', error);
        }
    }
</script>

<div class="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-2xl mx-auto">
        <div class="bg-white shadow-xl rounded-lg p-8">
            <h2 class="text-3xl font-bold text-center mb-8">Request Unit</h2>

            <form onsubmit={handleSubmit} class="space-y-6">
                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                        <label for="firstName" class="block text-sm font-medium text-gray-700">
                            First Name
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            bind:value={formData.Fullname}
                            required
                            class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                        />
                    </div>


                </div>

                <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        bind:value={formData.Email}
                        required
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>

                <div>
                    <label for="phone" class="block text-sm font-medium text-gray-700">
                        Phone Number
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        bind:value={formData.Phone}
                        required
                        class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    />
                </div>

                <div class="flex justify-end">
                    <button
                        type="submit"
                        class="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
                    >
                        Submit Request
                    </button>
                </div>
            </form>
        </div>
    </div>
</div>
