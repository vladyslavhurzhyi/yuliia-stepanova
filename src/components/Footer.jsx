import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" border-t-[1px]  mx-[20px]">
      <div className="block w-[191px] mx-auto my-[41px]">
        <div className="flex flex-row gap-16 w-full items-start">
          <a target="_blank" href="https://wa.me/qr/5CR4WO23H3AJP1">
            <Image
              src="https://file.rendit.io/n/EozyfYMOUW89dx3nWwi0.svg"
              alt="whatsapp"
              className="mt-0 w-5"
              width={21}
              height={21}
            />
          </a>
          <a target="_blank" href="https://dribbble.com/Julia_Stepanova">
            <Image
              src="https://file.rendit.io/n/p8yfviXF96DvGi03SURQ.svg"
              alt="dribbble"
              className="mt-0 w-5"
              width={21}
              height={21}
            />
          </a>

          <a
            target="_blank"
            href="https://www.linkedin.com/in/yuliia-stepanova-8231641ab/"
          >
            <Image
              src="https://file.rendit.io/n/X3IoZmFhgG85Z57piOk7.svg"
              alt="linkedin"
              className="w-5"
              width={21}
              height={21}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
