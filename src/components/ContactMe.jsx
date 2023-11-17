import Image from "next/image";

const ContactMe = () => {
  return (
    <div className="mx-auto max-w-[428px] mb-[282px] mt-[502px]">
      <div className="mx-auto block text-center text-[36px] font-bold tracking-[-0.5] text-[#dedede] mb-[20px]">
        Contact Me
      </div>
      <p className="text-center text-[24px] font-normal tracking-[-0.5] leading-[38px] text-[#959595] w-full mb-[46px]">
        If you are looking to hire a designer, I&apos;m currently available for
        work
      </p>

      <a href="mailto:juliastepanovaa18@gmail.com" className="flex gap-[16px]">
        <button
          className="bg-[#cda8fd] hover:bg-[#bd91f6] transition-all delay-100 flex flex-row justify-center pt-5 gap-4 mx-auto w-[400px] h-16 cursor-pointer items-start rounded"
          type="email"
        >
          <Image
            src="https://file.rendit.io/n/ivwZTBzaqGyrJoQKCndx.svg"
            alt="Group"
            className="mt-1 w-5"
            width={20}
            height={16}
          />
          <p className="text-[18px] font-normal text-white">
            juliastepanovaa18@gmail.com
          </p>
        </button>
      </a>
    </div>
  );
};

export default ContactMe;
