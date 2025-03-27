import { supabase } from "./createSupabase";

export async function getComplexes() {
    const { data, error} = await supabase.from('Complex').select(`
        Id,
        Name,
        Building (Id, Name, Unit (Id, Name, IsAvailable))
        `)
    if (error) {
        console.error(error);
        return undefined;
    }
    else {
        return data;
    }
}