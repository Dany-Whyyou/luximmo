import Image from "next/image";

export default function Gallery() {
  return (
    <section className="bg-white pt-6 pb-40">
      <div className="container">
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Colonne gauche - Grande image verticale */}
          <div className="lg:w-1/3">
            <Image
              src="/images/Mask group4.png"
              alt="Intérieur salon"
              width={400}
              height={800}
              className="w-full h-100 object-cover"
              style={{ minHeight: "600px" }}
            />
          </div>

          {/* Colonne droite - Grille 2x2 */}
          <div className="lg:w-2/3">
            {/* Ligne du haut - Grande image */}
            <div className="mb-5">
              <Image
                src="/images/Mask group5.png"
                alt="Cuisine moderne"
                width={800}
                height={400}
                className="w-full h-72 object-cover"
              />
            </div>

            {/* Ligne du bas - 2 images */}
            <div className="flex gap-5">
              <div className="w-1/2">
                <Image
                  src="/images/Mask group6.png"
                  alt="Maison moderne"
                  width={400}
                  height={300}
                  className="w-full h-72 object-cover"
                />
              </div>
              <div className="w-1/2">
                <Image
                  src="/images/Mask group7.png"
                  alt="Salon avec vue"
                  width={400}
                  height={300}
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
