import Link from "next/link";

const Header = () => {
  return (
    <header className=" flex items-center mb-[92px] text-white  justify-between mt-[35px] ml-[100px] mr-[118px]">
      <div className=" font-bold text-[34px]">
        <Link
          href={"/"}
          className="p-4 hover:text-zinc-400 transition-all duration-300 "
        >
          Yuliia Stepanova
        </Link>
      </div>

      <nav className=" text-[18px]  flex font-['Manrope']">
        <Link
          href={"/"}
          className="p-4 mr-[72px] hover:text-zinc-400 transition-all duration-300"
        >
          Creativ
        </Link>

        <Link
          href={"/"}
          className="p-4 mr-[72px] hover:text-zinc-400 transition-all duration-300"
        >
          Social media
        </Link>

        <Link
          href={"/"}
          className="p-4 mr-[72px] hover:text-zinc-400 transition-all duration-300"
        >
          Retouch
        </Link>

        <Link
          href={"/"}
          className="p-4  mr-[72px] hover:text-zinc-400 transition-all duration-300"
        >
          Illustrations
        </Link>

        <Link
          href={"/"}
          className="p-4  hover:text-zinc-400 transition-all duration-300"
        >
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
