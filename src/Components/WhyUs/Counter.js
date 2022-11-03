import { animate } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { Number } from "./WhyUsElements";

function Counter({ isInView }) {
  const ref = useRef();

  useEffect(() => {
    const controls = animate(0, 25, {
      duration: 2,
      onUpdate(value) {
        ref.current.textContent = value.toFixed(0);
      },
    });
    return () => controls.stop();
  }, [isInView]);

  return <Number ref={ref} />;
}

export default Counter;
