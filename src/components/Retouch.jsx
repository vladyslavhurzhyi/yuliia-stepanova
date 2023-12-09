import ImageZoom from "./ImageZoom";
import SectionWrapper from "./SectionWrapper";
import Title from "./Title";

const Retouch = () => {
  return (
    <SectionWrapper idName={"retouch"}>
      <Title>Retouch</Title>

      <div className="block md:flex md:gap-[25px]">
        <div className=" max-w-[100%]  lg:w-[625px] lg:h-[939px] mb-[24px]">
          <ImageZoom src={"/rt1.jpg"} />
        </div>
        <div className=" max-w-[100%]  lg:w-[625px] lg:h-[939px] mb-[24px]">
          <ImageZoom src={"/rt2.jpg"} />
        </div>
      </div>
      <div className="">
        <div className=" max-w-[100%]  lg:w-[1106px] lg:h-[626px] mb-[24px] mx-auto">
          <ImageZoom src={"/rt3.jpg"} />
        </div>
      </div>
      <div className=" ">
        <div className=" max-w-[100%]  lg:w-[1274px] lg:h-[632px] mb-[24px] mx-auto">
          <ImageZoom src={"/rt4.jpg"} />
        </div>
      </div>

      <div className=" ">
        <div className=" max-w-[100%]  lg:w-[1274px]  mb-[24px] mx-auto">
          <ImageZoom src={"/isolationKreativ.jpg"} />
        </div>
      </div>

      <div className="block md:flex md:gap-[25px] justify-center">
        <div className=" max-w-[100%]  lg:w-[625px] lg:h-[625px] mb-[24px]">
          <ImageZoom src={"/DSC_2.jpg"} />
        </div>
        <div className=" max-w-[100%]  lg:w-[625px] lg:h-[625px] mb-[24px]">
          <ImageZoom src={"/DSC_1.jpg"} />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Retouch;
