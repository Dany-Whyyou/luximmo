"use client";

import { useState } from "react";

const tabs = [
  {
    id: "architecture",
    title: "Architecture",
    content: `Vivre au sein d'un espace où tous les éléments sont en harmonie et en cohérence est bénéfique. La décoration sublime les partis pris de l'architecture c'est pourquoi nous vous proposons désormais un service d'aide à la sélection du mobilier et de la décoration. Pour vous, nous privilégions des marques éthiques dont les produits sont réalisés par la main de l'homme. c'est pourquoi nous vous proposons désormais un service d'aide à la sélection du mobilier et de la décoration. Pour vous, nou`,
  },
  {
    id: "decoration",
    title: "Décoration d'intérieur",
    content: `Notre service de décoration d'intérieur vous accompagne dans la création d'espaces uniques et personnalisés. Nous mettons notre expertise à votre service pour transformer vos intérieurs en lieux de vie harmonieux, alliant esthétique et fonctionnalité. Chaque projet est une nouvelle opportunité de créer un environnement qui vous ressemble.`,
  },
  {
    id: "renovation",
    title: "Rénovation",
    content: `Spécialistes de la rénovation, nous prenons en charge tous vos projets de transformation. De la rénovation complète à la remise aux normes, notre équipe qualifiée assure un travail soigné dans le respect des délais. Nous vous accompagnons de la conception à la réalisation pour donner une nouvelle vie à vos espaces.`,
  },
];

export default function Architecture() {
  const [activeTab, setActiveTab] = useState("architecture");

  const activeContent = tabs.find((tab) => tab.id === activeTab);

  return (
    <section id="architecture" className="py-16 bg-white">
      <div className="container">
        <div className="flex flex-col lg:flex-row">
          {/* Menu à gauche */}
          <div className="lg:w-1/2 lg:border-r border-gray-200">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full text-left py-6 px-4 border-b border-gray-200 transition-all duration-300 ${
                  activeTab === tab.id
                    ? "text-gray-900 font-bold text-3xl lg:text-4xl"
                    : "text-gray-400 hover:text-gray-600 text-xl lg:text-2xl"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Contenu à droite */}
          <div className="lg:w-1/2 p-8 lg:p-12 bg-gray-50">
            <p className="text-gray-600 text-sm leading-relaxed mb-8 transition-all duration-300">
              {activeContent?.content}
            </p>
            <div className="flex justify-end">
              <button className="bg-[#6B8E23] text-white px-6 py-2 rounded text-sm font-medium hover:bg-[#5a7a1e] transition-colors">
                VOIR +
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
