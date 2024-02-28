"use client";

import * as React from "react";
// import { ClientLogo } from "./clientLogo";
// import logoClient1 from "/public/images/logoCliente1.svg";
// import logoClient2 from "/public/images/logoCliente2.svg";
// import logoClient3 from "/public/images/logoCliente3.svg";
// import logoClient4 from "/public/images/logoCliente4.svg";
// import logoClient5 from "/public/images/logoCliente5.svg";

export function ClientsSection() {
  // if (typeof window !== "undefined") {
  //   const innerWidth = window.innerWidth;

  //   const [width, setWidth] = React.useState(innerWidth);

  //   React.useEffect(() => {
  //     const handleResize = () => {
  //       setWidth(window.innerWidth);
  //     };

  //     window.addEventListener("resize", handleResize);

  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, []);

  //   console.log(width);

  return (
    <div className="relative z-10 bg-[#141414] p-10 lg:p-20 flex flex-col gap-6">
      <div className="text-2xl lg:text-4xl font-bold text-justify">
        Estamos procurando sócios estratégicos que compartilhem nossa visão de
        mineração responsável e crescimento sustentável. A ARCA Mineração é seu
        parceiro de confiança no setor de mineração, oferecendo oportunidades de
        colaboração que vão de joint ventures a contratos de fornecimento.
        Juntos, podemos forjar um futuro onde a excelência e a responsabilidade
        se encontram.
      </div>
      {/* <div className="hidden">
          <div className="text-4xl opacity-70 font-bold">Clientes e sócios</div>
          <div className="flex items-center justify-between">
            <ClientLogo
              image={logoClient1.src}
              size={width > 1420 ? 200 : 150}
            />
            <ClientLogo
              image={logoClient2.src}
              size={width > 1420 ? 300 : 250}
            />
            <ClientLogo
              image={logoClient3.src}
              size={width > 1420 ? 300 : 250}
            />
            <ClientLogo
              image={logoClient4.src}
              size={width > 1420 ? 200 : 150}
            />
            <ClientLogo
              image={logoClient5.src}
              size={width > 1420 ? 200 : 150}
            />
          </div>
        </div> */}
    </div>
  );
  // }

  // return <></>;
}
