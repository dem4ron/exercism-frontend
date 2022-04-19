import { useEffect, useCallback } from "react";
import { useTestimonialsStore } from "@/store";

export function useFetchData() {
  const populateTestimonials = useTestimonialsStore(
    useCallback((store) => store.populateTestimonials, [])
  );

  const orderBy = useTestimonialsStore(useCallback(store=>store.orderBy,[]))
  const page= useTestimonialsStore(useCallback(store=>store.page,[]))
  const searchQuery = useTestimonialsStore(useCallback(store=>store.searchQuery,[]))
  const track = useTestimonialsStore(useCallback(store=>store.track,[]))


  useEffect(() => {
    populateTestimonials({order:orderBy.value, page, track,exercise:searchQuery });
  }, [orderBy, page, searchQuery, track]);
}
