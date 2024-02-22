import * as React from "react";
import bg from "/public/images/bg.png";
import logo from "/public/images/logoArca.png";
import Image from "next/image";
import { MdOutlineLocalPhone, MdMailOutline } from "react-icons/md";
import { IoLogoInstagram, IoLogoLinkedin } from "react-icons/io";
import Link from "next/link";

export function HeaderSection() {
  return (
    <div className="headerContainer relative w-full h-full">
      <div className="absolute left-0 w-full h-full">
        <div className="relative w-full h-full">
          <Image src={bg} fill={true} style={{ objectFit: "cover" }} />
        </div>
      </div>
      <div className="relative flex min-h-screen flex-col items-center justify-between p-16">
        {/* Navbar */}
        <div className="navbar flex justify-between w-full">
          <div className="navbarL">
            <ul className="flex gap-10 items-center">
              <li>
                <Image src={logo} className="relative" />
              </li>
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
          </div>
          <div className="navbarR flex items-center">
            <ul className="flex gap-10">
              <li className="flex items-center justify-center gap-3">
                <div>
                  <MdOutlineLocalPhone
                    style={{
                      fill: "#FEB700",
                    }}
                  />
                </div>
                <div>+ 55 69 3225 4770</div>
              </li>
              <li className="flex items-center justify-center gap-3">
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
          </div>
        </div>

        {/* Titles */}
        <div className="titleContainer flex w-full">
          <div className="titleContainerL w-[60%]">
            <div className="p-5 border-[#FEB700] border-l-[6px]">
              <div className="text-6xl font-black">
                Bem-vindo à ARCA Mineração: Forjando um futuro dourado
              </div>
              <div className="text-xl">
                Descubra a excelência em mineração responsável
              </div>
            </div>
          </div>
          <div className="titleContainerR w-[40%]">
            <div className="bg-[#0000007b] p-9">
              <div className="font-bold text-xl pb-36 flex flex-col gap-10">
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
