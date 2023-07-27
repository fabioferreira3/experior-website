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
        <div className={`${inverse ? "bg-secondary" : "bg-main"} p-12`}>
          <h3 className="flex items-center gap-3">
            <Icon className="text-4xl" />
            <div className="text-xl font-bold mt-1">{title}</div>
          </h3>
          <div className="mt-6">{children}</div>
        </div>
      </SlideInSection>
    </FadeInSection>
  );
};
