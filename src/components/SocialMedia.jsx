import SectionWrapper from "./SectionWrapper";
import Title from "./Title";
import ImageZoom from "./ImageZoom";

const SocialMedia = () => {
  return (
    <SectionWrapper>
      <Title>SocialMedia</Title>

      <div className="flex">
        <div className="w-full mr-[25px] ">
          <div className="relative w-[625px] h-[625px] mb-[24px]">
            <ImageZoom src={"/sm1.jpg"} />
          </div>
          <div className="relative w-[625px] h-[625px] mb-[24px]">
            <ImageZoom src={"/sm3.jpg"} />
          </div>
          <div className="relative w-[625px] h-[625px] mb-[24px]">
            <ImageZoom src={"/sm5.jpg"} />
          </div>
        </div>

        {/* ///// */}

        <div className="w-full mr-[25px]">
          <div className="relative w-[625px] h-[625px] mb-[24px]">
            <ImageZoom src={"/sm2.jpg"} />
          </div>
          <div className="relative w-[625px] h-[625px] mb-[24px]">
            <ImageZoom src={"/sm4.jpg"} />
          </div>
          <div className="relative w-[625px] h-[625px] mb-[24px]">
            <ImageZoom src={"/sm6.jpg"} />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SocialMedia;
