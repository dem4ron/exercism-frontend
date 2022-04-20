import { useCallback, useEffect, useState } from "react";
import { useTestimonialsStore } from "@/store";

export function useTurnPages() {
  const maxPage = useTestimonialsStore(
    useCallback((store) => store.pageTotalCount, [])
  );
  const pick = useTestimonialsStore(useCallback((store) => store.turnPage, []));
  const page = useTestimonialsStore(useCallback((store) => store.page, []));

  const [pageButtons, setPageButtons] = useState<number[]>([]);

  // EFFECT
  useEffect(() => {
    setPageButtons(generatePageButtons(1, maxPage, page));
  }, [page, maxPage]);

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

  return { pick, maxPage, page, pageButtons };
}
