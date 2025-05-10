import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL!,
  import.meta.env.VITE_SUPABASE_KEY!
);

export const getAllDailyStats = async () => {
  try {
    const { data, error } = await supabase
      .from("DailyUsageStats")
      .select("*")
      .order("day", { ascending: false });

    if (error) throw new Error(error.message);
    return data;
  } catch (err) {
    console.error("[dailyStatsApi] getAllDailyStats error:", err);
    return null;
  }
};
