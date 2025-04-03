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
export async function getAllRenters(){
    let {data, error } = await supabase
    .from('Renter')
      .select(`
        Id,
        Fullname,
        Email,
        Phone,
        UnitId,
        Unit (Name, Complex(Id), IsAvailable)
      `)
      let rentersRequest = data.filter((renter) => renter.Unit['IsAvailable'] == true)
    return rentersRequest;
};
export async function updateUnit(unitId){
  let {data, error} = await supabase
  .from('Unit')
  .update({'IsAvailable': false})
  .eq('Id', unitId)
  .select()
}
export async function updateRenters(renterId, unitId){
  let {data, error} = await supabase
  .from('Renter')
  .delete()
  .eq('UnitId', unitId)
  .neq('Id', renterId);
}

export async function getApprovedRenters(){
  let {data, error } = await supabase
    .from('Renter')
      .select(`
        Id,
        Fullname,
        Email,
        Phone,
        UnitId,
        Unit (Name, Complex(Id), IsAvailable)
      `)
      let approvedRenters = data.filter((renter) => renter.Unit['IsAvailable'] == false)
      
    return approvedRenters;
}