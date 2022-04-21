import { useTestimonialsStore } from "@/store";
import { useCallback, useEffect } from "react";

export function useSearchQuery(debouncedValue: string) {
  const setSearchQuery = useTestimonialsStore(
    useCallback((store) => store.setSearchQuery, [])
  );

  useEffect(() => {
    if (debouncedValue.length > 0) {
      setSearchQuery(debouncedValue);
    } else {
      setSearchQuery("");
    }
  }, [debouncedValue]);
}
