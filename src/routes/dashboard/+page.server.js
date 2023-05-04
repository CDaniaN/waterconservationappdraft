import { goto } from "$app/navigation";
import { redirect } from "@sveltejs/kit";

export const load = async ({ locals: { supabase, getSession } }) => {
  const session = await getSession();

  if (!session) {
    throw redirect(303, "/");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select(`showerTime, gardenTime, teethTime, dishTime`)
    .eq("id", session.user.id)
    .single();

  return { session, profile };
};

export const actions = {
  update: async ({ request, locals: { supabase, getSession } }) => {
    const formData = await request.formData();
    const showerTime = formData.get("showerTime");
    const gardenTime = formData.get("gardenTime");
    const dishTime = formData.get("dishTime");
    const teethTime = formData.get("teethTime");

    const session = await getSession();

    const { data: profile } = await supabase
      .from("profiles")
      .select(`showerTime, gardenTime, teethTime, dishTime`)
      .eq("id", session.user.id)
      .single();

    const { error } = await supabase.from("profiles").upsert({
      id: session?.user.id,
      showerTime: Number(showerTime) * 5, // Assumes 5 gallons of water per minute for showering
      gardenTime: Number(gardenTime) * 13, // Assumes 13 gallons of water per minute for watering garden
      dishTime: Number(dishTime) * 4, // Assumes 4 gallons of water per minute for doing dishes
      teethTime: Number(teethTime) * 3, // Assumes 3 gallons of water per minute for brushing teeth
    });

    if (error) {
      return fail(500, {
        showerTime,
        gardenTime,
        dishTime,
        teethTime,
      });
    }

    return {
      showerTime,
      gardenTime,
      dishTime,
      teethTime,
    };
  },
  signout: async ({ locals: { supabase, getSession } }) => {
    const session = await getSession();
    if (session) {
      await supabase.auth.signOut();
    }
  },
};
