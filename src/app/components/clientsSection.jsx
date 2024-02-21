import * as React from "react";
import { ClientLogo } from "./clientLogo";
import logoClient1 from "/public/images/logoCliente1.svg";
import logoClient2 from "/public/images/logoCliente2.svg";
import logoClient3 from "/public/images/logoCliente3.svg";
import logoClient4 from "/public/images/logoCliente4.svg";
import logoClient5 from "/public/images/logoCliente5.svg";

export function ClientsSection() {
  return (
    <div className="relative z-10 bg-[#141414] p-20 flex flex-col gap-6">
      <div className="text-4xl font-bold text-justify">
        Estamos procurando sócios estratégicos que compartilhem nossa visão de
        mineração responsável e crescimento sustentável. A ARCA Mineração é seu
        parceiro de confiança no setor de mineração, oferecendo oportunidades de
        colaboração que vão de joint ventures a contratos de fornecimento.
        Juntos, podemos forjar um futuro onde a excelência e a responsabilidade
        se encontram.
      </div>
      <div className="text-4xl opacity-70 font-bold">Clientes e sócios</div>
      <div className="flex items-center justify-between">
        <ClientLogo image={logoClient1.src} size={200} />
        <ClientLogo image={logoClient2.src} size={300} />
        <ClientLogo image={logoClient3.src} size={300} />
        <ClientLogo image={logoClient4.src} size={200} />
        <ClientLogo image={logoClient5.src} size={200} />
      </div>
    </div>
  );
}
