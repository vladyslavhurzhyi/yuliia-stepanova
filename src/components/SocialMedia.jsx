import SectionWrapper from "./SectionWrapper";
import Title from "./Title";
import ImageZoom from "./ImageZoom";

const SocialMedia = () => {
  return (
    <SectionWrapper idName={"socialMedia"}>
      <Title>Social Media</Title>

      <div className="block md:flex">
        <div className="md:mr-[25px]  ">
          <div className="relative  max-w-[100%]    mb-[24px]">
            <ImageZoom src={"/sm1.jpg"} />
          </div>
          <div className="relative  max-w-[100%]    mb-[24px]">
            <ImageZoom src={"/sm3.jpg"} />
          </div>
          <div className="relative  max-w-[100%]    mb-[24px]">
            <ImageZoom src={"/sm5.jpg"} />
          </div>
        </div>

        {/* ///// */}

        <div className="">
          <div className="relative  max-w-[100%]    mb-[24px]">
            <ImageZoom src={"/sm2.jpg"} />
          </div>
          <div className="relative  max-w-[100%]    mb-[24px]">
            <ImageZoom src={"/sm4.jpg"} />
          </div>
          <div className="relative  max-w-[100%]    mb-[24px]">
            <ImageZoom src={"/sm6.jpg"} />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SocialMedia;
