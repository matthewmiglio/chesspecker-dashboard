import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_KEY!
);

export const getAllChessPeckerSets = async () => {
  try {
    console.log("[chessPeckerSetsApi] Fetching data...");

    const { data, error } = await supabase
      .from("chessPeckerSets")
      .select("*")
      .order("set_id", { ascending: false }); // ← valid column

    if (error) {
      console.error("[chessPeckerSetsApi] Supabase returned error:", error);
      throw new Error(error.message);
    }

    if (!data || data.length === 0) {
      console.warn("[chessPeckerSetsApi] No data found.");
      return [];
    }

    console.log("[chessPeckerSetsApi] First row keys:", Object.keys(data[0]));
    console.log("[chessPeckerSetsApi] Sample row:", data[0]);

    return data;
  } catch (err) {
    console.error("[chessPeckerSetsApi] getAll error:", err);
    return null;
  }
};
