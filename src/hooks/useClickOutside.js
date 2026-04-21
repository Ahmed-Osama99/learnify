import { useEffect } from "react";
// custom hook will use it when click outside any target reference
// pass the reference element and handler will execute
// Notice : the ref element will be a wrapper element for best practice
export const useClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (e) => {
      // if the ref element isn't attached yet , or if the user clicked inside the ref element (do nothing)
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }

      handler(e);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
};