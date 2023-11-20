import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className={"sectionHero mt-20 lg:mt-[150px] max-w-[100%]"}>
        <div className="flex flex-col lg:flex-row ">
          <div className="order-2 lg:order-1 w-full md:w-[711px]  mb-[12px] mr-[75px]  font-bold text-[24px] md:text-[34px] lg:text-[64px] leading-[29px] lg:leading-[70px]  tracking-[-0.5px] text-[#DEDEDE] ">
            <h1>
              Hi, I&apos;m Yuliia <br /> a seasoned{" "}
              <span className=" text-[#FBC98D]">graphic designer</span> and{" "}
              <span className="text-[#CDA8FD]">photo retoucher</span>
            </h1>
            <p className="text-sm md:text-[18px] lg:text-2xl  font-normal tracking-[-0.5] leading-[20px] lg:leading-[36px] text-[#959595] w-full mt-1">
              with a passion for turning ordinary visuals into extraordinary
              works of art. With over 7 years of experience, I&apos;ve
              fine-tuned the art of retouching and graphic design, weaving a
              visual narrative that captivates and resonates.
            </p>
          </div>
          <div className="mb-[20px] lg:mb-0 order-1 lg:order-2">
            <Image
              priority
              quality={100}
              width={400}
              height={400}
              src={"/yuliia.png"}
              alt="yuliia stepanova"
              className="mx-auto w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:min-w-[400px] lg:h-[400px] rounded-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
