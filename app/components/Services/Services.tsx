import Image from "next/image";

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container">
        <div className="relative min-h-[500px] rounded overflow-hidden">
          {/* Image de fond */}
          <Image
            src="/images/living-room-interior 1.png"
            alt="Salon intérieur"
            fill
            className="object-cover"
          />

          {/* Overlay sombre */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Contenu */}
          <div className="relative z-10 p-12 lg:p-16">
            <div className="lg:w-2/3 lg:ml-auto">
              {/* Titre */}
              <div className="flex items-center gap-2 mb-6">
                <span className="w-2 h-2 bg-[#6B8E23] rotate-45 flex-shrink-0"></span>
                <h2 className="text-4xl lg:text-5xl font-bold text-white">Nos Services</h2>
              </div>

              {/* Sous-titre */}
              <p className="text-2xl lg:text-3xl text-white mb-8">
                Nous réalisons des oeuvres...<br />
                des lieux aimés de nos clients.
              </p>

              {/* Séparateur vert */}
              <div className="w-32 h-1 bg-[#6B8E23] mb-8"></div>

              {/* Liste des services */}
              <ul className="space-y-2 text-white text-sm">
                <li>Entreprise générale de bâtiments et travaux publics</li>
                <li>Maitrise d&apos;œuvre conception architecturale Architecture D&apos;interieur</li>
                <li>Ordonnancement et pilotage de chantier OPC Maitrise d&apos;oeuvre exécution</li>
                <li>Bureaux d&apos;études techniques et économiques</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
