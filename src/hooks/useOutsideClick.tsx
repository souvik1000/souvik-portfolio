import { useEffect } from "react";

export const useOutsideClick = (
  ref: React.MutableRefObject<HTMLElement | null>,
  callback: () => void,
  allCLicks = false
) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      const rightClick = event.button === 2;
      const considerAllClicks = allCLicks ? rightClick : !rightClick;
      if (
        (ref.current && !ref.current.contains(event.target), considerAllClicks)
      ) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref, callback, allCLicks]);
};
