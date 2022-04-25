import { useCallback, useState } from "react";
export function useToggle(
  initState: boolean = false
): [boolean, () => void, (delay?: number) => void] {
  const [isOpen, setIsOpen] = useState(initState);

  const toggle = useCallback(() => {
    setIsOpen((o) => !o);
  }, []);

  const onClose = useCallback((delay: number = 0) => {
    setTimeout(() => {
      setIsOpen(false);
    }, delay);
  }, []);

  return [isOpen, toggle, onClose];
}
