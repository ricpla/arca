"use client";

import React, { useState, useCallback } from "react";
import axios from "axios";
import { MdOutlineBolt } from "react-icons/md";
import Link from "next/link";
import bg from "/public/images/contact-bg.png";
import Image from "next/image";

const ContactUs = () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    email: "",
  });

  const handleOnChange = useCallback((e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));

    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  }, []);

  const handleServerResponse = useCallback((ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      });

      setInputs({
        email: "",
      });
    } else {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg },
      });
    }
  }, []);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
      axios({
        method: "POST",
        url: process.env.NEXT_PUBLIC_CONTACT_FORM_ENDPOINT_URL,
        data: inputs,
      }).then((_response) => {
        handleServerResponse(true, "Gracias, su mensaje ha sido enviado");
      });
    },
    [inputs, handleServerResponse]
  );

  return (
    <div
      className="bg-yellow w-full h-full flex justify-center items-center py-32 relative"
      id="contactus"
    >
      <div className="absolute left-0 w-full h-full">
        <div className="relative w-full h-full">
          <Image src={bg} fill={true} style={{ objectFit: "cover" }} />
        </div>
      </div>
      <div className="w-[80%] lg:w-[60%] flex items-center justify-center relative z-10">
        <div className="items-center justify-center flex flex-col gap-10">
          <div className="flex flex-col gap-3">
            <div>
              <h1 className="font-bold text-white outline-title text-center text-5xl">
                Conecte-se com a ARCA Mineração
              </h1>
            </div>
            <div>
              <p className="text-center text-[20px]">
                Estamos aqui para ouvir e colaborar com você
              </p>
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-[90%] justify-center items-center gap-8"
          >
            <input
              type="text"
              className="rounded-full bg-transparent border border-white placeholder-white font-medium px-2 w-full py-3"
              placeholder="Email*"
              onChange={handleOnChange}
              value={inputs.email}
            />
            <div className="flex font-bold gap-5 pt-10">
              <button
                className="bg-white rounded-full text-black px-4 py-2 text-center"
                type="submit"
                disabled
              >
                {!status.submitting
                  ? !status.submitted
                    ? "Entre em contato agora"
                    : "¡Listo!"
                  : "Enviando..."}
              </button>
              <Link
                href={"https://api.whatsapp.com/send?phone=+556932254770"}
                className="bg-white text-black rounded-full border border-black px-4 py-2 text-center"
              >
                Agendar uma chamada
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
