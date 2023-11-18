import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className={"sectionHero"}>
        <div className="flex flex-col lg:flex-row ">
          <div className="order-2 lg:order-1 w-full md:w-[711px] mb-[12px] mr-[75px]  font-bold text-[24px] lg:text-[64px] leading-[29px] lg:leading-[70px]  tracking-[-0.5px] text-[#DEDEDE] ">
            <h1>
              Hi, I&apos;m Yuliia <br /> a seasoned{" "}
              <span className=" text-[#FBC98D]">graphic designer</span> and{" "}
              <span className="text-[#CDA8FD]">photo retoucher</span>
            </h1>
            <p className="text-sm lg:text-2xl font-normal tracking-[-0.5] leading-[18px] lg:leading-[36px] text-[#959595] w-full">
              with a passion for turning ordinary visuals into extraordinary
              works of art. With over 7 years of experience, I&apos;ve
              fine-tuned the art of retouching and graphic design, weaving a
              visual narrative that captivates and resonates.
            </p>
          </div>
          <div className=" order-1 lg:order-2">
            <Image
              priority
              quality={100}
              width={400}
              height={400}
              src={"/yuliia.png"}
              alt="yuliia stepanova"
              className="mx-auto w-[200px] h-[200px] lg:w-[400px] lg:h-[400px] rounded-full"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
