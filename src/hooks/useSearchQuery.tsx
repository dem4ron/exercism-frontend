import { useTestimonialsStore } from "@/store";
import { useCallback, useEffect } from "react";
import { useTurnPages } from "./useTurnPages";

export function useSearchQuery(debouncedValue: string) {
  const setSearchQuery = useTestimonialsStore(
    useCallback((store) => store.setSearchQuery, [])
  );
  
  const {pick} = useTurnPages()

  useEffect(() => {
    pick(1);
    if (debouncedValue.length > 0) {
      setSearchQuery(debouncedValue);
    } else {
      setSearchQuery("");
    }
  }, [debouncedValue]);
}
