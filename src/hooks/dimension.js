import { useEffect, useRef } from "react";

export default function useDimensions(ref) {
  const dimensions = useRef({ width: 0, height: 0 });

  useEffect(() => {
    dimensions.current = getDimensions(ref);
  }, [ref, dimensions]);

  return dimensions.current;
}

export function getDimensions(ref) {
  return {
    width: ref.current.clientWidth,
    height: ref.current.clientHeight,
  };
}
