const SectionWrapper = ({ children, idName }) => {
  return (
    <section className="mt-[130px]" id={idName}>
      {children}
    </section>
  );
};

export default SectionWrapper;
