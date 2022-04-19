import { useTestimonialsStore } from "@/store";
import { useCallback } from "react";

export function useResults() {

  const results = useTestimonialsStore(
    useCallback(store => store.testimonials, [])
  );
  const status = useTestimonialsStore(useCallback(store => store.status, []));

  return { results, status };
}
