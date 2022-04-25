import { Testimonials } from "@/store/storeTypes";
import { useLayoutEffect, useRef } from "react";

export function useScrollTop(dep: Testimonials | null) {
  //littlebit too specific hook..
  const elementRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (elementRef.current) {
      elementRef.current.scrollTo({ top: 0 });
    }
  }, [dep]);

  return elementRef;
}
