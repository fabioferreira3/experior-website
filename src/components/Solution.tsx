import FadeInSection from "./FadeInSection";

export const Solution = ({ icon: Icon, title, children, order }: any) => {
  const odd = !!(order % 2);
  return (
    <FadeInSection duration="2000ms">
      <div
        className={`${
          odd
            ? "bg-secondary md:border-secondary"
            : "bg-blue-900 md:border-blue-900"
        } border border-white p-12 md:h-96 md:rounded-xl`}
      >
        <div className="flex flex-col justify-center h-full gap-4">
          <div className="flex justify-center">
            <div
              className={`${
                odd ? "bg-blue-900" : "bg-secondary"
              } rounded-full text-gray-100 w-20 h-20 flex items-center justify-center`}
            >
              <Icon className="text-4xl" />
            </div>
          </div>
          <div className="font-bold text-3xl text-center">{title}</div>
          <div className="text-center text-xl">{children}</div>
        </div>
      </div>
    </FadeInSection>
  );
};
