"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    id: "renovation",
    title: "Rénovation",
    iconDefault: "/images/Group 1.png",
    iconActive: "/images/Group 1 green.png",
  },
  {
    id: "construction",
    title: "Construction de Maison",
    iconDefault: "/images/Group 3.png",
    iconActive: "/images/Group 3 green.png",
  },
  {
    id: "suivi",
    title: "Suivi de travaux d'exécution",
    iconDefault: "/images/Vector.png",
    iconActive: "/images/Vector green.png",
  },
  {
    id: "etudes",
    title: "Etudes techniques et économiques",
    iconDefault: "/images/Group 4.png",
    iconActive: "/images/Group 4 green.png",
  },
];

export default function Devis() {
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      service: selectedService,
      prenom: formData.get("prenom"),
      nom: formData.get("nom"),
      telephone: formData.get("telephone"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    console.log("Données du formulaire:", data);
    // Ici vous pouvez envoyer les données à votre API
  };

  return (
    <section id="devis" className="py-30 bg-[#435F35]">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Partie gauche - Services */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl lg:text-4xl font-regular text-white mb-2">
              Votre Devis en ligne
            </h2>
            <div className="w-24 h-1 bg-white mb-10"></div>

            {/* Grille des services */}
            <div className="grid grid-cols-2 gap-4">
              {services.map((service) => {
                const isSelected = selectedService === service.id;
                return (
                  <div
                    key={service.id}
                    onClick={() => setSelectedService(service.id)}
                    className={`p-10 rounded flex flex-col items-center text-center cursor-pointer transition-all duration-300 ${
                      isSelected
                        ? "bg-white"
                        : "bg-transparent border-2 border-white hover:bg-white/10"
                    }`}
                  >
                    <div className="mb-4">
                      <Image
                        src={isSelected ? service.iconActive : service.iconDefault}
                        alt={service.title}
                        width={170}
                        height={120}
                        className="object-contain"
                      />
                    </div>
                    <span
                      className={`text-sm font-medium transition-colors duration-300 ${
                        isSelected ? "text-[#6B8E23]" : "text-white"
                      }`}
                    >
                      {service.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Partie droite - Formulaire */}
          <div className="lg:w-1/2">
            {/* Logo */}
            <div className="flex justify-center mb-8">
              <Image
                src="/images/logo_white.png"
                alt="Lux Immo Concept"
                width={290}
                height={120}
                className="object-contain"
              />
            </div>

            {/* Formulaire */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="hidden" name="service" value={selectedService || ""} />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  name="prenom"
                  placeholder="Prénom"
                  className="w-full px-4 py-3 bg-transparent border-b border-white/50 text-white placeholder-white/70 text-sm focus:outline-none focus:border-white"
                />
                <input
                  type="text"
                  name="nom"
                  placeholder="Nom"
                  className="w-full px-4 py-3 bg-transparent border-b border-white/50 text-white placeholder-white/70 text-sm focus:outline-none focus:border-white"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="tel"
                  name="telephone"
                  placeholder="N° de Téléphone"
                  className="w-full px-4 py-3 bg-transparent border-b border-white/50 text-white placeholder-white/70 text-sm focus:outline-none focus:border-white"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="e-Mail"
                  className="w-full px-4 py-3 bg-transparent border-b border-white/50 text-white placeholder-white/70 text-sm focus:outline-none focus:border-white"
                />
              </div>
              <textarea
                name="message"
                placeholder="Votre Message"
                rows={8}
                className="w-full px-4 py-3 bg-transparent border-b border-white/50 text-white placeholder-white/70 text-sm focus:outline-none focus:border-white resize-none"
              ></textarea>

              {/* Bouton Valider */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-white text-[#6B8E23] px-8 py-3 rounded font-bold hover:bg-gray-100 transition-colors"
                >
                  Valider
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
