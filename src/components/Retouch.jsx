import ImageZoom from "./ImageZoom";
import SectionWrapper from "./SectionWrapper";
import Title from "./Title";

const Retouch = () => {
  return (
    <SectionWrapper>
      <Title>Retouch</Title>

      <div className="flex gap-[25px]">
        <div className="relative w-[625px] h-[939px] mb-[24px]">
          <ImageZoom src={"/rt1.jpg"} />
        </div>
        <div className="relative w-[625px] h-[939px] mb-[24px]">
          <ImageZoom src={"/rt2.jpg"} />
        </div>
      </div>
      <div className=" ">
        <div className="relative w-[1106px] h-[626px] mb-[24px] mx-auto">
          <ImageZoom src={"/rt3.jpg"} />
        </div>
      </div>
      <div className=" ">
        <div className="relative w-[1274px] h-[632px] mb-[24px] mx-auto">
          <ImageZoom src={"/rt4.jpg"} />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Retouch;
