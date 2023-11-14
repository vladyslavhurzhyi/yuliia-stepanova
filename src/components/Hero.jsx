import Image from "next/image";

const Hero = () => {
  return (
    <section className="pl-[100px] pr-[165px] font-['Manrope']">
      <div className="flex ">
        <div className=" max-w-[711px] mb-[12px] mr-[96px] font-bold text-[64px] leading-[70px]  tracking-[-0.5px] text-[#DEDEDE] ">
          <p>
            Hi, I&apos;m Yuliia a seasoned{" "}
            <span className=" text-[#FBC98D]">graphic designer</span> and{" "}
            <span className="text-[#CDA8FD]">photo retoucher</span>
          </p>
          <p className="text-[24px] text-[#959595] font-medium leading-[36px] tracking-[-0.5px]">
            with a passion for turning ordinary visuals into extraordinary works
            of art. With over 7 years of experience, I&apos;ve fine-tuned the
            art of retouching and graphic design, weaving a visual narrative
            that captivates and resonates.
          </p>
        </div>
        <div className="">
          <Image
            priority
            width={400}
            height={400}
            src={"/yuliia.png"}
            alt="yuliia stepanova"
            className="min-w-[400px] min-h-[400px]"
          />
        </div>
      </div>

      <div className="mouse"></div>
    </section>
  );
};

export default Hero;
