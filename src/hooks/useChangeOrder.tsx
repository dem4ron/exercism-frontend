import { useTestimonialsStore } from "@/store";
import { OrderByObj } from "@/store/storeTypes";
import { useCallback } from "react";

export function useChangeOrder():[OrderByObj, ({}:OrderByObj)=>void]{

  const setSortObj = useTestimonialsStore(
    useCallback((store) => store.setOrderBy, [])
  );

  const currSortObj = useTestimonialsStore(
    useCallback((store) => store.orderBy, [])
  );

  return [currSortObj, setSortObj];
}