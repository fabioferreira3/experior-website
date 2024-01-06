"useClient";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

function FadeInSection(props: any) {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const [hasEntered, setHasEntered] = useState(false);
  useEffect(() => {
    if (inView) {
      setHasEntered(true);
    }
  }, [inView]);

  return (
    <div
      ref={ref}
      className={`overflow-hidden transition-opacity duration-[${
        props.duration ?? "1000ms"
      }] ${hasEntered ? "opacity-100" : "opacity-0"}`}
    >
      {props.children}
    </div>
  );
}

export default FadeInSection;
