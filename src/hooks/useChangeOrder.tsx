import { useTestimonialsStore } from "@/stores/store";
import { useCallback } from "react";

export function useChangeOrder(){

  const setSortObj = useTestimonialsStore(
    useCallback((store) => store.setOrderBy, [])
  );

  const currSortObj = useTestimonialsStore(
    useCallback((store) => store.orderBy, [])
  );

  return {currSortObj, setSortObj};
}