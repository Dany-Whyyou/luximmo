import Image from "next/image";

export default function Realisations() {
  return (
    <section id="realisations" className="pt-16 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row">
        {/* Partie gauche - 2 images en haut + bloc vert en bas */}
        <div className="lg:w-2/3">
          {/* 2 images en haut */}
          <div className="flex gap-5 mb-5">
            <div className="w-1/2">
              <Image
                src="/images/Mask group1.png"
                alt="Réalisation 1"
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="w-1/2">
              <Image
                src="/images/Mask group2.png"
                alt="Réalisation 2"
                width={600}
                height={400}
                className="w-full h-80 object-cover"
              />
            </div>
          </div>

          {/* Bloc vert avec titre */}
          <div className="bg-[#7AB05F] p-20 relative">
            {/* Ligne verticale + losange */}
            <div className="absolute left-16 top-8">
              <div className="w-0.5 h-15 bg-white ml-1"></div>
              <div className="w-3 h-3 bg-white rotate-45 mb-8 mt-8"></div>
              <div className="w-0.5 h-44 bg-white ml-1"></div>
            </div>

            {/* Titre */}
            <div className="ml-24">
              <h2 className="text-4xl lg:text-5xl font-light text-white italic mb-2">
                Nos Dernières
              </h2>
              <div className="flex items-center gap-4">
                <h2 className="text-4xl lg:text-5xl font-light text-white italic">
                  Réalisations
                </h2>
                <div className="w-62 h-0.5 bg-white ml-10"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Partie droite - Grande image */}
        <div className="lg:w-1/3 pl-5">
          <Image
            src="/images/Mask group3.png"
            alt="Réalisation principale"
            width={600}
            height={800}
            className="w-full h-100 object-cover"
            style={{ minHeight: "600px" }}
          />
        </div>
        </div>
      </div>
    </section>
  );
}
