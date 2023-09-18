import { useEffect, useRef, useState } from "react";

function useSliderMargin(value: number) {
  const [loaded, setLoaded] = useState(false);
  const margin = useRef<number>();

  setTimeout(() => {
    setLoaded(true);
  }, 100);

  useEffect(() => {
    margin.current = (window.innerWidth - value) / 2;
  }, [loaded]);

  return margin.current;
}

export default useSliderMargin;
