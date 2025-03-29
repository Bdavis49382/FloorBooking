import { getUserId } from "./auth.svelte";
import { supabase } from "./createSupabase";
import { user } from "./stores.svelte";


export async function getAllBuildings(){
    const aptId = await getUserId(user.id);
    let { data, error } = await supabase
    .from('Building')
    .select('Id, Name')
    .eq('ApartmentId', aptId)
    return data;
}
export async function getAllUnitTypes(){
    const aptId = await getUserId(user.id);
    let { data, error } = await supabase
    .from('ApartmentType')
    .select('Id, Type')
    .eq('ApartmentId', aptId)
    return data;
}