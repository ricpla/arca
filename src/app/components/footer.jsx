import React from "react";
import { MdArrowForward } from "react-icons/md";
import { AiFillInstagram } from "react-icons/ai";
import { ImFacebook2, ImLinkedin2 } from "react-icons/im";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-center py-20 bg-[#171717] text-white">
      <div className="w-[90%]">
        <div className="flex justify-between">
          <div className="flex flex-col justify-between w-[50%]">
            <span>Assine para receber atualizações exclusivass</span>
            <form className="w-full flex items-center">
              <input
                type="email"
                placeholder="Digite seu endereço de e-mail"
                className="w-full bg-transparent border-b py-2"
              />
              <button>
                <MdArrowForward size={30} />
              </button>
            </form>
            <span className="text-[14px]">
              Copyright © 2023 ARCA. All rights reserved.
            </span>
          </div>
          <div className="flex flex-col lg:text-[20px] text-end w-[50%]">
            <span>support@arca.com</span>
            <span>+ 55 69 3225 4770</span>
            <span>Brasil</span>
            <div className="flex flex-col items-end">
              <span className="font-bold">Siga-nos em</span>
              <div className="flex gap-4 pt-4">
                <Link href={"#"}>
                  <AiFillInstagram />
                </Link>
                <Link href={"#"}>
                  <ImFacebook2 />
                </Link>
                <Link href={"#"}>
                  <ImLinkedin2 />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
