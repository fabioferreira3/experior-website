import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const SlideInFromBottom = (props: any) => {
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
      className={`transition-all duration-[2000ms] ease-in-out transform ${
        hasEntered
          ? "translate-y-0 opacity-100"
          : `${
              props.fromTop ? "-translate-y-full" : "translate-y-full"
            } opacity-0`
      }`}
    >
      {props.children}
    </div>
  );
};

export default SlideInFromBottom;
