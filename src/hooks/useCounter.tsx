import { useState, useCallback } from "react";

export function useCounter(step:number=1):[number, ()=>void] {
  const [counter, setCounter] = useState(0);

  const increment = useCallback(() => {
    setCounter((c) => (c += step));
  }, []);

  return [counter, increment];
}
