const Title = ({ children }) => {
  return (
    <h2 className="whitespace-nowrap text-[35px] lg:text-[64px] mb-[30px] lg:mb-[90px] font-bold text-white w-min">
      {children}
    </h2>
  );
};

export default Title;
