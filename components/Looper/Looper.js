import React, { useState, useRef, useCallback, useEffect } from "react";
import { Container } from "./Looper.styles";

// Modified Looper component from: https://dev.to/finiam/infinite-looping-react-component-3135
const Looper = ({ speed, direction, children }) => {
  const [looperInstances, setLooperInstances] = useState(1);
  const outerRef = useRef(null);
  const innerRef = useRef(null);

  console.log("speed", speed);

  function resetAnimation() {
    if (innerRef?.current) {
      innerRef.current.setAttribute("data-animate", "false");

      setTimeout(() => {
        if (innerRef?.current) {
          innerRef.current.setAttribute("data-animate", "true");
        }
      }, 10);
    }
  }
  const setupInstances = useCallback(() => {
    if (!innerRef?.current || !outerRef?.current) return;
    const { height } = innerRef.current.getBoundingClientRect();
    const { height: parentheight } = outerRef.current.getBoundingClientRect();
    const heightDeficit = parentheight - height;

    const instanceHeight = height / innerRef.current.children.length;
    if (heightDeficit) {
      setLooperInstances(
        looperInstances + Math.ceil(heightDeficit / instanceHeight) + 1
      );
    }
    resetAnimation();
  }, [looperInstances]);

  useEffect(() => setupInstances(), [setupInstances]);

  useEffect(() => {
    window.addEventListener("resize", setupInstances);

    return () => {
      window.removeEventListener("resize", setupInstances);
    };
  }, [looperInstances, setupInstances]);

  return (
    <Container ref={outerRef}>
      <div className="looper__innerList" ref={innerRef} data-animate="true">
        {[...Array(looperInstances)].map((_, ind) => (
          <div
            key={ind}
            className="looper__listInstance"
            style={{
              animationDuration: `${speed}s`,
              animationDirection: direction === "right" ? "reverse" : "normal",
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Looper;
