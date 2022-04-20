import { useTestimonialsStore } from "@/store";
import { useCallback, useEffect } from "react";

export function useSearchQuery(debouncedValue: string) {
  const setSearchQuery = useTestimonialsStore(
    useCallback((store) => store.setSearchQuery, [])
  );
  const turnPage = useTestimonialsStore(
    useCallback((store) => store.turnPage, [])
  );

  useEffect(() => {
    if (debouncedValue.length > 0) {
      setSearchQuery(debouncedValue);
    } else {
      setSearchQuery("");
    }
    turnPage(1);
  }, [debouncedValue]);
}
