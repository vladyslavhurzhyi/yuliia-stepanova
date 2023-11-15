import Image from "next/image";

const Hero = () => {
  return (
    <>
      <section className="">
        <div className="flex ">
          <div className=" w-[713px] mb-[12px] mr-[96px]  font-bold text-[64px] leading-[70px]  tracking-[-0.5px] text-[#DEDEDE] ">
            <h1>
              Hi, I&apos;m Yuliia a seasoned{" "}
              <span className=" text-[#FBC98D]">graphic designer</span> and{" "}
              <span className="text-[#CDA8FD]">photo retoucher</span>
            </h1>
            <p className="text-2xl  font-medium tracking-[-0.5] leading-[36px] text-[#959595] w-full">
              with a passion for turning ordinary visuals into extraordinary
              works of art. With over 7 years of experience, I&apos;ve
              fine-tuned the art of retouching and graphic design, weaving a
              visual narrative that captivates and resonates.
            </p>
          </div>
          <div className="">
            <Image
              priority
              quality={100}
              width={400}
              height={400}
              src={"/yuliia.png"}
              alt="yuliia stepanova"
              className="min-w-[400px] min-h-[400px]"
            />
          </div>
        </div>
      </section>
      <div className="mouse"></div>
    </>
  );
};

export default Hero;
