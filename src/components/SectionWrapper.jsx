const SectionWrapper = ({ children, idName }) => {
  return (
    <section className="mt-[50px] lg:mt-[130px]" id={idName}>
      {children}
    </section>
  );
};

export default SectionWrapper;
