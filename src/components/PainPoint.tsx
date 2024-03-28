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
            inverse ? "bg-zinc-100" : "bg-zinc-200"
          } p-12 md:h-72 flex flex-col text-gray-100 justify-around border-gray-300 border-2 md:border-0`}
        >
          <h3 className="flex items-center md:gap-3">
            <Icon className="text-6xl md:text-4xl text-gray-600" />
            <div className="text-3xl md:text-2xl font-bold mt-1 text-center md:text-start text-gray-600">
              {title}
            </div>
          </h3>
          <div className="mt-6 text-lg md:text-xl text-center md:text-start text-gray-600">
            {children}
          </div>
        </div>
      </SlideInSection>
    </FadeInSection>
  );
};
