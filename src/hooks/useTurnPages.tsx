import { useCallback, useEffect, useState } from "react";
import { useTestimonialsStore } from "@/store";

export function useTurnPages() {
  // STORE
  const initPage = useTestimonialsStore(useCallback((store) => store.page, []));
  const maxPage = useTestimonialsStore(
    useCallback((store) => store.pageTotalCount, [])
  );
  const turnPage = useTestimonialsStore(
    useCallback((store) => store.turnPage, [])
  );

  // LOCAL
  const [page, setPage] = useState(initPage);
  const [pageButtons, setPageButtons] = useState<number[]>([]);

  // EFFECT
  useEffect(() => {
    turnPage(page);
    setPageButtons(generatePageButtons(1, maxPage, page));
  }, [page, maxPage]);

  // FNS
  const prev = useCallback(() => {
    if (page > 1) {
      setPage((p) => (p -= 1));
    }
  }, []);

  const next = useCallback(() => {
    if (page < maxPage) {
      setPage((p) => (p += 1));
    }
  }, []);

  const pick = useCallback((picked: number) => {
    setPage(picked);
  }, []);

  const generatePageButtons = useCallback(
    (min: number, max: number, picked: number) => {
      let arr = [];
      for (let i = picked - 2; i <= picked + 2; i++) {
        if (i > min && i < max) {
          arr.push(i);
        }
      }
      return arr;
    },
    []
  );

  return { prev, next, pick, maxPage, page, pageButtons };
}
