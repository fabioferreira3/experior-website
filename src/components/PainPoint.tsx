import FadeInSection from "./FadeInSection";
import SlideInSection from "./SlideInSection";

export const PainPoint = ({
  icon: Icon,
  title,
  children,
  fromRight = false,
  inverse = false,
  shouldSlide = true,
}: any) => {
  return (
    <FadeInSection>
      <SlideInSection active={shouldSlide} fromRight={fromRight}>
        <div
          className={`${
            inverse ? "md:bg-gray-700" : "md:bg-gray-600"
          } p-12 md:h-72 flex flex-col justify-around border border-white md:border-0 bg-gray-600`}
        >
          <h3 className="flex items-center gap-6 md:gap-3">
            <Icon className="text-6xl md:text-4xl" />
            <div className="text-3xl md:text-xl font-bold mt-1">{title}</div>
          </h3>
          <div className="mt-6 text-lg">{children}</div>
        </div>
      </SlideInSection>
    </FadeInSection>
  );
};
