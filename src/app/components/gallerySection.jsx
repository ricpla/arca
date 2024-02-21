import * as React from "react";
import { GalleryComponent } from "./galleryComponent";
import image1 from "/public/images/gallery1.png";
import image2 from "/public/images/gallery2.png";
import image3 from "/public/images/gallery3.png";

export function GallerySection() {
  return (
    <div className="relative z-10 bg-black">
      <GalleryComponent
        title={
          "Compromisso com a sustentabilidade: investimentos que fazem a diferença"
        }
        subtitle={"Compromisso com a sustentabilidade"}
        paragraph={
          "Investidores preocupados com a sustentabilidade encontram na ARCA Mineração uma oportunidade única. Nosso compromisso com práticas sustentáveis de mineração não apenas gera retornos financeiros, mas também contribui para um mundo mais sustentável. Junte-se a nós para investir em uma empresa que vai além do lucro econômico, deixando um impacto positivo no planeta e nas comunidades locais."
        }
        image={image1.src}
        left
      />

      <GalleryComponent
        title={"Inovação e tecnologia em cada grama de ouro"}
        subtitle={"Inovação e tecnologia"}
        paragraph={
          "Na ARCA, a inovação e a tecnologia são os pilares de nossas operações. De práticas de mineração mais eficientes a soluções ambientais avançadas, estamos na vanguarda do setor. Junte-se a nós para fazer parte de um futuro em que a tecnologia impulsiona o sucesso na mineração responsável."
        }
        image={image2.src}
        right
      />

      <GalleryComponent
        title={"Investimentos lucrativos no futuro da mineração"}
        subtitle={"Oportunidades de investimento"}
        paragraph={
          "A ARCA Mineração não é apenas uma líder em mineração responsável, mas uma oportunidade de investimento no futuro sustentável do setor. Ao se juntar a nós, você se torna parte de uma visão que vai além da extração de ouro; é um investimento na criação de valor sustentável e no crescimento econômico do Brasil."
        }
        image={image3.src}
        left
      />
    </div>
  );
}
