import Image from "next/image";
import { galleryImages } from "@/data/gallery";

export default function Gallery() {
  return (
    <section className="min-h-fit w-full flex flex-col items-center space-y-8 px-8 lg:px-40 bg-[linear-gradient(to_right,#f1f5f9_2px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_2px,transparent_1px)] bg-size-[40px_40px]">
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-3xl text-sky-700 font-semibold md:text-4xl">
          Gallery
        </h2>

        <p className="text-lg leading-8 text-gray-700 text-center">
          Documentation of Sejukin’s installation, maintenance, and air
          conditioning service projects.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <div
            key={image.id}
            className="group relative overflow-hidden rounded-2xl shadow-lg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={600}
              height={400}
              className="w-full h-70 object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-black/20 opacity-0 transition duration-500 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
}
