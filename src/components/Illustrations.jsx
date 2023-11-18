import ImageZoom from "./ImageZoom";
import SectionWrapper from "./SectionWrapper";
import Title from "./Title";

const Illustrations = () => {
  return (
    <SectionWrapper idName={"illustrations"}>
      <Title>Illustrations</Title>

      <div className="block md:flex ">
        <div className="lg:mr-[25px] ">
          <div className=" relative   max-w-[100%]  lg:w-[625px] lg:h-[501px]  mb-[24px]">
            <ImageZoom src={"/il1.jpg"} />
          </div>

          <div className="relative   max-w-[100%]  lg:w-[625px] lg:h-[394px]  mb-[24px]">
            <ImageZoom src={"/il3.jpg"} />
          </div>
          <div className="relative  max-w-[100%]  lg:w-[625px] lg:h-[444px]   mb-[24px]">
            <ImageZoom src={"/il5.jpg"} />
          </div>
          <div className="relative  max-w-[100%]  lg:w-[625px] lg:h-[441px]   mb-[24px]">
            <ImageZoom src={"/il7.jpg"} />
          </div>
        </div>

        {/* right */}
        <div className="">
          <div className="relative  max-w-[100%]  lg:w-[625px] lg:h-[618px]   mb-[24px]">
            <ImageZoom src={"/il2.jpg"} />
          </div>
          <div className="relative   max-w-[100%]  lg:w-[625px] lg:h-[299px]  mb-[24px]">
            <ImageZoom src={"/il4.jpg"} />
          </div>
          <div className="relative   max-w-[100%]  lg:w-[625px] lg:h-[549px]  mb-[24px]">
            <ImageZoom src={"/il6.jpg"} />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Illustrations;
