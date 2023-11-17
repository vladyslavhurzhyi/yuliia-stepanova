import Link from "next/link";

const Header = () => {
  return (
    <header className="  flex items-center mb-[92px] text-white  mt-[35px] ml-[100px] mr-[118px]">
      <div className=" font-bold text-[34px]">
        <Link
          href={"/"}
          className=" hover:text-zinc-400 transition-all duration-300 "
        >
          Yuliia Stepanova
        </Link>
      </div>

      <nav className=" ml-auto text-[18px]  flex  max-w-[713px]">
        <Link
          href={"/"}
          className="mr-[71px] hover:text-zinc-400 transition-all duration-300"
        >
          Creativ
        </Link>

        <Link
          href={"/"}
          className=" mr-[71px] hover:text-zinc-400 transition-all duration-300"
        >
          Social media
        </Link>

        <Link
          href={"/"}
          className=" mr-[71px] hover:text-zinc-400 transition-all duration-300"
        >
          Retouch
        </Link>

        <Link
          href={"/"}
          className="  mr-[71px] hover:text-zinc-400 transition-all duration-300"
        >
          Illustrations
        </Link>

        <Link
          href={"/"}
          className="  hover:text-zinc-400 transition-all duration-300"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
