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

export async function getUnit(unitId) {
    const { data, error} = await supabase.from('Unit').select(`Id, Name, Building (Name), ApartmentType (Type, Rent, Description)`).eq('Id',Number(unitId));
    if (error) {
        console.error(error);
        return undefined;
    }
    else if (data.length == 0) {
        console.error(`a search for ${unitId} found no entries of units.`)
        return undefined
    }
    else if (data.length > 1) {
        console.error(`a search for ${unitId} found multiple entries of units.`)
        return undefined
    }
    else {
        data[0]['image'] = "/src/assets/apartment3.jpg";
        return data[0];
    }
}