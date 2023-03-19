import { useState, useLayoutEffect } from "react";
import { throttle } from "lodash";

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getWidth);

  useLayoutEffect(() => {
    let isMounted = true;

    function handleResize() {
      if (isMounted) {
        setWindowSize(getWidth());
      }
    }

    window.addEventListener("resize", throttle(handleResize, 300));
    return () => {
      isMounted = false;
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return windowSize;
}

export default useWindowSize;
