import Image from "next/image";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="min-h-fit w-full flex flex-col items-center px-8 space-y-8 lg:flex-row lg:justify-between lg:px-40 scroll-mt-22"
    >
      <Image
        src="/about-us-image.webp"
        alt="Sejukin Image Description"
        width={500}
        height={300}
      />

      <div className="flex flex-col items-start space-y-4 md:max-w-2xl">
        <h2 className="text-3xl text-sky-700 font-semibold md:text-4xl">
          About Us
        </h2>
        <p className="text-lg leading-8 text-gray-700">
          Sejukin is a professional air conditioning service and maintenance
          company dedicated to keeping homes and businesses cool, clean, and
          comfortable. We provide reliable AC servicing with fast response times
          and high-quality workmanship.
        </p>

        <p className="text-lg leading-8 text-gray-700">
          Our strength lies in our experienced technicians, transparent service,
          and commitment to customer satisfaction. With modern solutions and
          dependable support, Sejukin helps customers maintain efficient and
          long-lasting air conditioning systems.
        </p>
      </div>
    </section>
  );
}
