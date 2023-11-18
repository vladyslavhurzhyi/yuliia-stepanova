"use client";
import Link from "next/link";
import { useState } from "react";
import MobMenuButton from "./MobMenuButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="  flex items-center mb-[50px] lg:mb-[92px] text-white  ml-5 mt-[10px] lg:mt-[35px] lg:ml-[100px] lg:mr-[118px]">
      <div className=" font-bold text-[25px] lg:text-[34px]">
        <Link
          href={"/"}
          className=" hover:text-zinc-400 transition-all duration-300 "
        >
          Yuliia Stepanova
        </Link>
      </div>

      <nav className=" ml-auto text-[18px] hidden lg:flex  max-w-[713px] ">
        <Link
          href={"#creativ"}
          className="mr-[71px] hover:text-zinc-400 transition-all duration-300"
        >
          Creativ
        </Link>

        <Link
          href={"#socialMedia"}
          className=" mr-[71px] hover:text-zinc-400 transition-all duration-300"
        >
          Social media
        </Link>

        <Link
          href={"#retouch"}
          className=" mr-[71px] hover:text-zinc-400 transition-all duration-300"
        >
          Retouch
        </Link>

        <Link
          href={"#illustrations"}
          className="  mr-[71px] hover:text-zinc-400 transition-all duration-300"
        >
          Illustrations
        </Link>

        <Link
          href={"#contact"}
          className="  hover:text-zinc-400 transition-all duration-300"
        >
          Contact
        </Link>
      </nav>

      <MobMenuButton
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleClick={handleClick}
      />

      <nav>
        <div
          className={`${
            isOpen ? "opacity-1" : "opacity-0"
          } transition ease all duration-300 absolute left-0 top-0  bg-[#1B1D1F] w-full h-screen z-40`}
        >
          <div className="flex flex-col items-center text-[25px] gap-5  mt-28">
            <Link
              onClick={handleClick}
              href={"#creativ"}
              className=" hover:text-zinc-400 transition-all duration-300"
            >
              Creativ
            </Link>

            <Link
              onClick={handleClick}
              href={"#socialMedia"}
              className="  hover:text-zinc-400 transition-all duration-300"
            >
              Social media
            </Link>

            <Link
              onClick={handleClick}
              href={"#retouch"}
              className="  hover:text-zinc-400 transition-all duration-300"
            >
              Retouch
            </Link>

            <Link
              onClick={handleClick}
              href={"#illustrations"}
              className="   hover:text-zinc-400 transition-all duration-300"
            >
              Illustrations
            </Link>

            <Link
              onClick={handleClick}
              href={"#contact"}
              className="  hover:text-zinc-400 transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
