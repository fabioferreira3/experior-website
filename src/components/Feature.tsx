const Feature = ({ icon: Icon, title, children }: any) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-center">
        <div className="rounded-full bg-secondary text-gray-100 w-20 h-20 flex items-center justify-center">
          <Icon className="text-4xl" />
        </div>
      </div>
      <div className="font-bold text-3xl text-center">{title}</div>
      <div className="text-center text-xl">{children}</div>
    </div>
  );
};

export default Feature;
