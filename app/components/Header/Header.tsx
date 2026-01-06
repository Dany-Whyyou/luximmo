"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white py-4 relative" style={{ zIndex: "999" }}>
      <div className="container flex items-center justify-between" style={{ zIndex: "999" }}>
        {/* Logo à gauche */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src="/images/logo_trans.png"
              alt="LIM Immo Concept"
              width={80}
              height={50}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Bouton hamburger pour mobile */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-700 my-1 transition-all duration-300 ${isMenuOpen ? "opacity-0" : ""}`}></span>
          <span className={`block w-6 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
        </button>

        {/* Navigation centrée - Desktop */}
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-8">
          <Link
            href="#accueil"
            className="text-gray-700 hover:text-[#6B8E23] transition-colors text-sm font-medium"
          >
            Présentation
          </Link>
          <Link
            href="#services"
            className="text-gray-700 hover:text-[#6B8E23] transition-colors text-sm font-medium"
          >
            Services
          </Link>
          <Link
            href="#realisations"
            className="text-gray-700 hover:text-[#6B8E23] transition-colors text-sm font-medium"
          >
            Réalisations
          </Link>
        </nav>

        {/* Section droite - Desktop */}
        <div className="hidden lg:flex flex-shrink-0 items-center gap-6" style={{ zIndex: "999" }}>
          <Link
            href="#contact"
            className="text-gray-700 hover:text-[#6B8E23] transition-colors text-sm font-medium"
          >
            Contact
          </Link>
          <Link
            href="#devis"
            className="bg-[#6B8E23] text-white px-4 py-2 rounded text-sm font-bold hover:bg-[#5a7a1e] transition-colors"
          >
            Demander un devis
          </Link>
        </div>
      </div>

      {/* Menu mobile */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col p-4">
          <Link
            href="#accueil"
            className="text-gray-700 hover:text-[#6B8E23] transition-colors text-sm font-medium py-3 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Présentation
          </Link>
          <Link
            href="#services"
            className="text-gray-700 hover:text-[#6B8E23] transition-colors text-sm font-medium py-3 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="#realisations"
            className="text-gray-700 hover:text-[#6B8E23] transition-colors text-sm font-medium py-3 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Réalisations
          </Link>
          <Link
            href="#contact"
            className="text-gray-700 hover:text-[#6B8E23] transition-colors text-sm font-medium py-3 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="#devis"
            className="bg-[#6B8E23] text-white px-4 py-3 rounded text-sm font-bold hover:bg-[#5a7a1e] transition-colors mt-4 text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Demander un devis
          </Link>
        </nav>
      </div>
    </header>
  );
}
