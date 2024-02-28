"use client";

import * as React from "react";
import bg from "/public/images/bg.png";
import logo from "/public/images/logoArca.png";
import Image from "next/image";
import { MdOutlineLocalPhone, MdMailOutline } from "react-icons/md";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

export function HeaderSection() {
  const [nav, setNav] = React.useState(false);

  const [textColor, ,] = React.useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="headerContainer relative w-full h-full">
      <div className="absolute left-0 w-full h-full">
        <div className="relative w-full h-full">
          <Image src={bg} fill={true} style={{ objectFit: "cover" }} />
        </div>
      </div>
      <div className="relative flex min-h-screen flex-col items-center justify-between p-10 lg:p-16">
        {/* Navbar */}
        <div className="navbar flex justify-between w-full">
          <div className="navbarL">
            <ul className="flex sm:gap-5 xl:gap-10 items-center sm:text-sm xl:text-md ">
              <li>
                <Image src={logo} className="relative" />
              </li>
              <li className="hidden lg:flex">
                <ul className="flex sm:gap-5 xl:gap-10 items-center sm:text-sm xl:text-md">
                  <li>
                    <Link href={"#"}>Sobre nós</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Os projetos</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Informação</Link>
                  </li>
                  <li>
                    <Link href={"#"}>Entre em contato</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div className="navbarR flex items-center sm:text-sm xl:text-md">
            <ul className="flex sm:gap-5 xl:gap-10">
              <li className="hidden sm:flex items-center justify-center gap-3">
                <div>
                  <MdOutlineLocalPhone
                    style={{
                      fill: "#FEB700",
                    }}
                  />
                </div>
                <div>+ 55 69 3225 4770</div>
              </li>
              <li className="hidden sm:flex items-center justify-center gap-3">
                <div>
                  <MdMailOutline
                    style={{
                      fill: "#FEB700",
                    }}
                  />
                </div>
                <div>contato@arca.com</div>
              </li>
            </ul>
            <div onClick={handleNav} className="pl-10 block lg:hidden z-20">
              {nav ? (
                <AiOutlineClose size={30} style={{ color: `${textColor}` }} />
              ) : (
                <AiOutlineMenu size={30} style={{ color: `${textColor}` }} />
              )}
            </div>

            <div
              className={
                nav
                  ? "lg:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 z-10"
                  : "lg:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 z-10"
              }
            >
              <ul>
                <li>
                  <Image
                    className="cursor-pointer"
                    src={logo}
                    alt="Logo MeQuieroMudar"
                    layout="responsive"
                    priority
                  />
                </li>

                <Link href="#">
                  <li
                    onClick={handleNav}
                    className="py-4 px-9 text-xl bg-white text-black my-3 rounded-md cursor-pointer"
                  >
                    Sobre nós
                  </li>
                </Link>

                <li
                  onClick={handleNav}
                  className="py-4 px-9 text-xl bg-white text-black my-3 rounded-md cursor-pointer"
                >
                  <Link href="/">Os projetos</Link>
                </li>
                <li
                  onClick={handleNav}
                  className="py-4 px-9 text-xl bg-white text-black my-3 rounded-md cursor-pointer"
                >
                  <Link href="/">Informação</Link>
                </li>
                <li
                  onClick={handleNav}
                  className="py-4 px-9 text-xl bg-white text-black  my-3 rounded-md cursor-pointer"
                >
                  <Link href="/">Entre em contato</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Titles */}
        <div className="titleContainer flex sm:flex-row flex-col gap-10 w-full">
          <div className="titleContainerL sm:w-[60%]">
            <div className="p-2 sm:p-5 border-[#FEB700] border-l-[6px]">
              <div className="text-3xl sm:text-5xl lg:text-6xl font-black">
                Bem-vindo à ARCA Mineração: Forjando um futuro dourado
              </div>
              <div className="sm:text-xl">
                Descubra a excelência em mineração responsável
              </div>
            </div>
          </div>
          <div className="titleContainerR sm:w-[40%]">
            <div className="bg-[#0000007b] p-6 sm:p-9">
              <div className="font-bold lg:text-xl pb-10 sm:pb-24 lg:pb-36 flex flex-col gap-5 sm:gap-10">
                <div>
                  Nós o convidamos a explorar nossa história, conhecer nossas
                  práticas de mineração responsável e experimentar a excelência
                  que define a ARCA Mineração.
                </div>
                <div>
                  Bem-vindo a uma jornada onde a mineração encontra a
                  responsabilidade e o ouro brilha com um propósito mais
                  profundo.
                </div>
              </div>
              <div className="flex items-center justify-center">
                <button className="border border-[#FEB700] text-[#FEB700] w-full py-2 text-lg">
                  Quero saber mais
                </button>
              </div>
            </div>
          </div>
        </div>

        {/*Header bottom section */}
        <div className="headerBottom flex justify-between w-full">
          <div className="flex gap-5">
            <div>
              <IoLogoInstagram size={40} />
            </div>
            <div>
              <IoLogoLinkedin size={40} />
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
