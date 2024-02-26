import { ClientsSection } from "./components/clientsSection";
import ContactUs from "./components/contactUs";
import { GallerySection } from "./components/gallerySection";
import { HeaderSection } from "./components/headerSection";
import { QualitySection } from "./components/qualitySection";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <main className="main-container bg-black hidden md:flex flex-col">
        <HeaderSection />
        <ClientsSection />
        <GallerySection />
        <QualitySection />
        <ContactUs />
        <Footer />
      </main>
      <div className="bg-black h-screen w-full text-5xl font-black flex items-center justify-center md:hidden">
        ARCA
      </div>
    </>
  );
}
