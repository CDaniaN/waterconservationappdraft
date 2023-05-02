import { goto } from "$app/navigation";
import { redirect } from "@sveltejs/kit";

export const load = async ({ locals: { supabase, getSession } }) => {
  const session = await getSession();

  if (!session) {
    throw redirect(303, "/");
  }

  return { session };
};

export const actions = {
  signout: async ({ locals: { supabase, getSession } }) => {
    const session = await getSession();
    if (session) {
      await supabase.auth.signOut();
    }
  },
};
