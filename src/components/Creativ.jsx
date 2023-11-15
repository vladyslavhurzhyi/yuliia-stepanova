import Image from "next/image";
import Title from "./Title";

const Creativ = () => {
  return (
    <>
      <section className="mt-[198px] ">
        <Title>Creativ</Title>
        <div className="flex">
          <div className="w-full mr-[25px] ">
            <div className=" relative w-full h-[543px] max-w-[625px] bg-slate-400 mb-[24px]">
              <Image
                priority
                src={"/1.png"}
                alt="1"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                fill
              ></Image>
            </div>
            <div className="relative w-full h-[441px] max-w-[625px] bg-slate-300 mb-[24px]">
              <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={"/3.png"}
                fill
                alt="3"
              ></Image>
            </div>
            <div className="relative w-full h-[625px] max-w-[625px] bg-slate-300 mb-[24px]">
              <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={"/5.png"}
                fill
                alt="5"
              ></Image>
            </div>
            <div className="relative w-full h-[625px] max-w-[625px] bg-slate-300 mb-[24px]">
              <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={"/7.png"}
                fill
                alt="7"
              ></Image>
            </div>
            <div className="relative w-full h-[347px] max-w-[625px] bg-slate-300 mb-[24px]">
              <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={"/9.png"}
                fill
                alt="9"
              ></Image>
            </div>
          </div>

          {/* right col */}
          <div className="w-full">
            <div className="relative w-full h-[625px] max-w-[625px] bg-slate-800 mb-[24px]">
              {" "}
              <Image
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={"/2.png"}
                fill
                alt="2"
              ></Image>
            </div>
            <div className="relative w-full  max-w-[625px] h-[504px] bg-slate-600 mb-[24px]">
              {" "}
              <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={"/4.png"}
                fill
                alt="4"
              ></Image>
            </div>
            <div className="relative w-full  max-w-[625px] h-[625px] bg-slate-600 mb-[24px]">
              {" "}
              <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={"/6.png"}
                fill
                alt="6"
              ></Image>
            </div>

            <div className="relative w-full  max-w-[625px] h-[587px] bg-slate-600 mb-[24px]">
              {" "}
              <Image
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                src={"/8.png"}
                fill
                alt="4"
              ></Image>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Creativ;
