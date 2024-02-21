import * as React from "react";
import { QualityItem } from "./qualityItem";
import { MdOutlineStarHalf } from "react-icons/md";
import { BiTimer } from "react-icons/bi";

export function QualitySection() {
  return (
    <div className="relative z-10 bg-[#141414] p-20 flex flex-col gap-6">
      <div className="text-center">
        Conheça os diferenciais que definem a ARCA Mineração no setor de
        mineração
      </div>
      <div className="text-6xl font-bold text-center">
        Forjando qualidade, inovação e sucesso
      </div>
      <div className="flex items-start justify-between py-12 gap-5">
        <QualityItem
          icon={<MdOutlineStarHalf />}
          title={"Compromisso com a qualidade do produto"}
          paragraph={
            "Na ARCA Mineração, a qualidade não é apenas um padrão; é a nossa promessa. Da extração à entrega, temos o compromisso de fornecer produtos minerais da mais alta qualidade. Cada grama de ouro que produzimos passa por rigorosos controles de qualidade, garantindo que nossos clientes recebam um produto que atenda e supere suas expectativas."
          }
        />
        <QualityItem
          icon={<BiTimer />}
          title={"Compromisso com padrões éticos e conformidade"}
          paragraph={
            "Nós nos diferenciamos pela adoção de tecnologias de ponta em todos os aspectos de nossas operações de mineração. Da exploração à mineração e ao processamento, investimos em tecnologia para otimizar cada etapa. Essa abordagem não apenas melhora a eficiência, mas também nos posiciona como líderes na implementação de práticas inovadoras no setor de mineração."
          }
        />
        <QualityItem
          icon={<MdOutlineStarHalf />}
          title={"Compromisso com a qualidade do produto"}
          paragraph={
            "A integridade e a conformidade ética são os pilares de nossos negócios. Na ARCA Mineração, operamos com altos padrões éticos e estamos comprometidos com o cumprimento de todas as regras e regulamentos relevantes. Essa abordagem garante que nossas operações sejam transparentes, éticas e contribuam positivamente para a reputação da empresa."
          }
        />
      </div>
    </div>
  );
}
