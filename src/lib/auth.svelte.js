import { user } from "./stores.svelte";
import { supabase } from "./createSupabase";
export async function checkLogin() {
  if (!user.isLoggedIn) {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (session) {
      user.id = session.user.id;
      user.isLoggedIn = true;
    } else {
      user.isLoggedIn = false;
    }
  }
}

export async function logout() {
  let { error } = await supabase.auth.signOut();
  if (error) {
    console.error(error.message);
  }
  window.location.pathname = 'login';
}

export async function login(email, password) {
    let { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) {
        console.error(error.message);
    }
    else {
        user.isLoggedIn = true;
        user.id = data.user.id;
        window.location.pathname = '';
    }
}
export async function register(email, password) {
    let { data, error } = await supabase.auth.signUp({
        email,
        password,
    });
    if (error) {
        console.error(error.message);
    }
    else {
        return data;
    }
}

export async function getUserId(userId){
  let {data, error} = await supabase
  .from('Complex')
  .select('Id')
  .eq('Auth', userId)

  return data;
}