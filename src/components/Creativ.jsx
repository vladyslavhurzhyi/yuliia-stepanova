import Title from "./Title";
import ImageZoom from "./ImageZoom";
import SectionWrapper from "./SectionWrapper";

const Creativ = () => {
  return (
    <>
      <SectionWrapper idName={"creativ"}>
        <Title>Creativ</Title>

        <div className="block md:flex">
          <div className="lg:mr-[25px] ">
            <div className=" relative w-full max-w-[100%]  lg:max-w-[625px] lg:h-[543px]  mb-[24px]">
              <ImageZoom src={"/1.jpg"} />
            </div>

            <div className="relative w-full  max-w-[625px]   mb-[24px]">
              <ImageZoom src={"/3.jpg"} />
            </div>
            <div className="relative w-full  max-w-[625px]  mb-[24px]">
              <ImageZoom src={"/5.jpg"} />
            </div>
            <div className="relative w-full  max-w-[625px]  mb-[24px]">
              <ImageZoom src={"/7.jpg"} />
            </div>
            <div className="relative w-full  max-w-[625px]  mb-[24px]">
              <ImageZoom src={"/9.jpg"} />
            </div>
          </div>

          {/* right */}
          <div className="">
            <div className="relative w-full max-w-[625px]    mb-[24px]">
              <ImageZoom src={"/2.jpg"} />
            </div>
            <div className="relative w-full  max-w-[625px]  mb-[24px]">
              <ImageZoom src={"/4.jpg"} />
            </div>
            <div className="relative w-full  max-w-[625px]  mb-[24px]">
              <ImageZoom src={"/6.jpg"} />
            </div>

            <div className="relative w-full  max-w-[625px]  mb-[24px]">
              <ImageZoom src={"/8.jpg"} />
            </div>

            <div className="relative w-full  max-w-[625px]  mb-[24px]">
              <ImageZoom src={"/10.jpg"} />
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
};

export default Creativ;
