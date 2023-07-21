import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const SlideInSection = (props: any) => {
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
      className={`transition-all duration-[1500ms] ease-in-out transform ${
        hasEntered
          ? `translate-x-0 opacity-100`
          : `${
              props.fromRight ? "translate-x-full" : "-translate-x-full"
            } opacity-0`
      }`}
    >
      {props.children}
    </div>
  );
};

export default SlideInSection;
