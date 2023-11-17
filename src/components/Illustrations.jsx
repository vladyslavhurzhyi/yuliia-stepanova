import ImageZoom from "./ImageZoom";
import SectionWrapper from "./SectionWrapper";
import Title from "./Title";

const Illustrations = () => {
  return (
    <SectionWrapper idName={"illustrations"}>
      <Title>Illustrations</Title>

      <div className="flex">
        <div className="w-full mr-[25px] ">
          <div className=" relative w-full  max-w-[625px] h-[501px] bg-slate-400 mb-[24px]">
            <ImageZoom src={"/il1.jpg"} />
          </div>

          <div className="relative w-full  max-w-[625px] h-[394px] bg-slate-300 mb-[24px]">
            <ImageZoom src={"/il3.jpg"} />
          </div>
          <div className="relative w-full max-w-[625px] h-[444px]  bg-slate-300 mb-[24px]">
            <ImageZoom src={"/il5.jpg"} />
          </div>
          <div className="relative w-full max-w-[625px] h-[441px]  bg-slate-300 mb-[24px]">
            <ImageZoom src={"/il7.jpg"} />
          </div>
        </div>

        {/* right */}
        <div className="w-full">
          <div className="relative w-full max-w-[625px]  h-[618px]  bg-slate-800 mb-[24px]">
            <ImageZoom src={"/il2.jpg"} />
          </div>
          <div className="relative w-full  max-w-[625px] h-[299px] bg-slate-600 mb-[24px]">
            <ImageZoom src={"/il4.jpg"} />
          </div>
          <div className="relative w-full  max-w-[625px] h-[549px] bg-slate-600 mb-[24px]">
            <ImageZoom src={"/il6.jpg"} />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Illustrations;
