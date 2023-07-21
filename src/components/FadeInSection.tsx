"useClient";
import { useRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function FadeInSection(props: any) {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  // Add a `fade-in` class to the element when it is in viewport.
  const [hasEntered, setHasEntered] = useState(false);
  useEffect(() => {
    if (inView) {
      setHasEntered(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${
        hasEntered ? "opacity-100" : "opacity-0"
      }`}
    >
      {props.children}
    </div>
  );
}

export default FadeInSection;
