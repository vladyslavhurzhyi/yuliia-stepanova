import ImageZoom from "./ImageZoom";

const Gallery = () => {
  return (
    <>
      <div className="flex">
        <div className="w-full mr-[25px] ">
          <div className=" relative w-full  max-w-[625px] h-[543px] bg-slate-400 mb-[24px]">
            <ImageZoom src={"/1.jpg"} />
          </div>

          <div className="relative w-full  max-w-[625px] h-[625px] bg-slate-300 mb-[24px]">
            <ImageZoom src={"/3.jpg"} />
          </div>
          <div className="relative w-full h-[625px] max-w-[625px] bg-slate-300 mb-[24px]">
            <ImageZoom src={"/5.jpg"} />
          </div>
          <div className="relative w-full h-[625px] max-w-[625px] bg-slate-300 mb-[24px]">
            <ImageZoom src={"/7.jpg"} />
          </div>
          <div className="relative w-full h-[347px] max-w-[625px] bg-slate-300 mb-[24px]">
            <ImageZoom src={"/9.jpg"} />
          </div>
        </div>

        {/* right */}
        <div className="w-full">
          <div className="relative w-full max-w-[625px]  h-[625px]  bg-slate-800 mb-[24px]">
            <ImageZoom src={"/2.jpg"} />
          </div>
          <div className="relative w-full  max-w-[625px] h-[504px] bg-slate-600 mb-[24px]">
            <ImageZoom src={"/4.jpg"} />
          </div>
          <div className="relative w-full  max-w-[625px] h-[625px] bg-slate-600 mb-[24px]">
            <ImageZoom src={"/6.jpg"} />
          </div>

          <div className="relative w-full  max-w-[625px] h-[578px] bg-slate-600 mb-[24px]">
            <ImageZoom src={"/8.jpg"} />
          </div>

          <div className="relative w-full  max-w-[625px] h-[441px] bg-slate-600 mb-[24px]">
            <ImageZoom src={"/10.jpg"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
