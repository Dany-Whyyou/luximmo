import Image from "next/image";

export default function Presentation() {
  return (
    <section id="presentation" className="py-8 md:py-16 bg-white overflow-hidden">
      <div className="container" style={{position:"relative"}}>
        <div className="hidden lg:block" style={{background:"#D9D9D9", height:"700px", width:"200px", position:"absolute", top:"0", left:"0", zIndex:"0"}}></div>
        <div className="hidden lg:block" style={{background:"#D9D9D9", height:"800px", width:"200px", position:"absolute", top:"700px", right:"0", zIndex:"10"}}></div>

        <div className="flex flex-col lg:flex-row mb-12 lg:mb-30" style={{ zIndex:"999"}}>
          {/* Grille d'images à gauche */}
          <div className="w-full lg:w-2/5 relative z-10 px-4 lg:px-0" style={{ paddingTop:"40px", paddingLeft: "0" }}>
            <div className="lg:pl-[100px]">
              <Image
                src="/images/Mask_group.png"
                alt="Immeuble 1"
                width={500}
                height={400}
                className="w-full lg:w-90 h-auto lg:h-140 rounded object-cover"
              />
            </div>
          </div>

          {/* Encadré à droite */}
          <div className="w-full lg:w-3/5 relative z-10 px-4 lg:px-0" style={{ paddingTop:"40px" }}>
            <div className="p-2 md:p-6 rounded lg:pr-[100px]">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 bg-[#6B8E23] rotate-45 flex-shrink-0"></span>
                <span className="text-2xl md:text-3xl lg:text-4xl font-regular text-[#6B8E23] leading-tight">Qui sommes-nous ?</span>
              </div>
              <h2 className="text-lg md:text-xl font-regular text-gray-800 mb-8 lg:mb-19" style={{borderBottom:"5px solid #6B8E23", paddingBottom: "20px"}}>LUX IMMO CONCEPT <span style={{fontSize: "0.6em"}}>SUARL</span> </h2>
              <div className="flex flex-col md:flex-row gap-6 lg:gap-10">
                <div className="md:w-1/2">
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Située à Dakar Sénégal, la société LUX IMMO  CONCEPT SUARL (LIMCO) est une entreprise générale  du bâtiment et d'architechture d'interieur qui intervient sur toutes les phases d'un projet
                </p>
                </div>

                <div className="md:w-1/2">
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Nous effectuons également suivant les besoins spécifiques de la Maitrise d'ouvrage des missions AMO (Assistance à la Maitrise d'ouvrage)
                </p>
                </div>
              </div>

               <div className="flex flex-col md:flex-row gap-4 lg:gap-10">
                <div className="md:w-1/2">
                  <Image
                src="/images/3d-rendering-house.png"
                alt="Immeuble 1"
                width={500}
                height={400}
                className="w-full h-40 md:h-50 rounded object-cover"
              />
                </div>

                <div className="md:w-1/2">
                  <Image
                src="/images/Mask group7.png"
                alt="Immeuble 1"
                width={500}
                height={400}
                className="w-full h-40 md:h-50 rounded object-cover"
              />
                </div>
              </div>


            </div>
          </div>
        </div>

        {/* Section Notre Mission */}
       <div className="flex flex-col-reverse lg:flex-row" style={{ zIndex:"999"}}>
          {/* Grille d'images à gauche */}
         <div className="w-full lg:w-3/5 relative z-10 px-4 lg:px-0" style={{ paddingTop:"40px" }}>
            <div className="p-2 md:p-6 rounded lg:pr-[100px]">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 bg-[#6B8E23] rotate-45 flex-shrink-0"></span>
                <span className="text-2xl md:text-3xl lg:text-4xl font-regular text-[#6B8E23] leading-tight">Notre mission</span>
              </div>
                {/* Liste des missions */}
              <ul className="space-y-4 md:space-y-6 mb-8">
                <li className="text-gray-800 text-base md:text-lg font-medium">Conception</li>
                <li className="text-gray-800 text-base md:text-lg font-medium">Constitution d&apos;un DCE</li>
                <li className="text-gray-800 text-base md:text-lg font-medium">Réalisation de l&apos;appel d&apos;offres</li>
                <li className="text-gray-800 text-base md:text-lg font-medium">Suivi de travaux d&apos;exécution second et gros oeuvre Livraison</li>
              </ul>

              {/* Séparateur */}
              <div className="border-t border-gray-300 my-6 md:my-8"></div>

              {/* Réseaux sociaux */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <span className="text-[#6B8E23] text-sm">Suivez Nous sur nos réseaux</span>
                <div className="flex items-center gap-4">
                  {/* LinkedIn */}
                  <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  {/* X (Twitter) */}
                  <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  {/* Facebook */}
                  <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a href="#" className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Flèche */}
              <div className="mt-6">
                <span className="text-[#6B8E23] text-2xl">&rarr;</span>
              </div>

            </div>
          </div>

          {/* Encadré à droite */}
           <div className="w-full lg:w-2/5 relative z-10 px-4 lg:px-0" style={{ paddingTop:"40px" }}>
            <div className="lg:pr-[100px]">
              <Image
                src="/images/Mask group.png"
                alt="Immeuble 1"
                width={500}
                height={400}
                className="w-full lg:w-90 h-auto lg:h-140 rounded object-cover"
              />
            </div>
          </div>



        </div>

      </div>
    </section>
  );
}
