import { useCallback, useState } from "react";
export function useToggle(initState: boolean = false): [boolean, () => void] {
  const [isOpen, setIsOpen] = useState(initState);

  const toggle = useCallback(() => {
    setIsOpen((o) => !o);
  }, []);

  return [isOpen, toggle];
}
