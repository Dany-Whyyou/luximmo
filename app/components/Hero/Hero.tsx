import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="accueil" className="py-8 md:py-16 bg-white">
      <div className="container" style={{position:"relative"}}>
        <div className="hidden lg:block" style={{background:"#D9D9D9", height:"900px", width:"300px", position:"absolute", top:"-200px", right:"0", zIndex:"0"}}></div>
        <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-regular text-gray-800 leading-tight mb-6 px-2 md:px-0">
              Le millimètre est l&apos;échelle de nos
              <br />
              <span className="font-bold" style={{borderBottom:"5px solid #6B8E23", paddingBottom: "20px"}} >FINITIONS INTÉRIEURES</span>
            </h1>
          </div>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Texte à gauche */}
          <div className="w-full lg:w-1/3 px-2 md:px-0">
            <ul className="mb-8 space-y-2 text-sm md:text-base">
              <li className="flex items-start gap-2 text-gray-600">
                <span className="w-2 h-2 bg-[#6B8E23] rotate-45 flex-shrink-0 mt-1.5"></span>
                Entreprise générale de bâtiments et travaux publics Maitrise d'œuvre
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <span className="w-2 h-2 bg-[#6B8E23] rotate-45 flex-shrink-0 mt-1.5"></span>
                Conception architecturale Architecture D'interieur
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <span className="w-2 h-2 bg-[#6B8E23] rotate-45 flex-shrink-0 mt-1.5"></span>
                Ordonnancement et pilotage de chantier
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <span className="w-2 h-2 bg-[#6B8E23] rotate-45 flex-shrink-0 mt-1.5"></span>
                OPC Maitrise d'oeuvre exécution
              </li>
              <li className="flex items-start gap-2 text-gray-600">
                <span className="w-2 h-2 bg-[#6B8E23] rotate-45 flex-shrink-0 mt-1.5"></span>
                Bureaux d'études techniques et économiques
              </li>
            </ul>
            <Link
              href="#devis"
              className="inline-block bg-[#6B8E23] text-white px-6 md:px-8 py-3 rounded font-medium hover:bg-[#5a7a1e] transition-colors text-sm md:text-base"
            >
              Demandez votre devis
            </Link>
          </div>

          {/* Image à droite */}
          <div className="w-full lg:w-2/3 mt-8 lg:mt-0" style={{zIndex:"100"}}>
            <div className="lg:-mt-15">
              <Image
                src="/images/3d-rendering-house-model.png"
                alt="Maison 3D"
                width={600}
                height={400}
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
