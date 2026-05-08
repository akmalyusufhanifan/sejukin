import Image from "next/image";

export default function Service() {
  return (
    <section className="min-h-fit w-full flex flex-col items-center space-y-8">
      <h2 className="text-3xl text-sky-700 font-semibold md:text-4xl">
        Our Services
      </h2>

      {/* service 1 */}
      <div className="flex flex-col items-center gap-10 md:grid md:grid-cols-2 lg:flex lg:flex-row">
        <div className="w-100 h-100 md:w-65 md:h-110 bg-gray-200 rounded-2xl border-2 border-gray-100 shadow-lg overflow-hidden transform transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-xl">
          <div className="relative w-full h-50">
            <Image
              src="/install.webp"
              alt="AC Installation"
              fill
              className="object-cover rounded-t-2xl"
            />
          </div>

          <div className="w-full pt-4 px-4 flex flex-col justify-center items-center space-y-2">
            <h3 className="text-2xl text-sky-700 font-semibold">
              AC Installation
            </h3>
            <p className="text-md text-gray-700 text-center">
              Professional AC installation service for homes and businesses with
              precise setup, efficient performance, and reliable cooling comfort
              from day one.
            </p>
          </div>
        </div>

        {/* service 2 */}
        <div className="w-100 h-100 md:w-65 md:h-110 bg-gray-200 rounded-2xl border-2 border-gray-100 shadow-lg overflow-hidden transform transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-xl">
          <div className="relative w-full h-50">
            <Image
              src="/service.webp"
              alt="AC Installation"
              fill
              className="object-cover rounded-t-2xl brightness-75"
            />
          </div>

          <div className="w-full pt-4 px-4 flex flex-col justify-center items-center space-y-2">
            <h3 className="text-2xl text-sky-700 font-semibold">AC Service</h3>
            <p className="text-md text-gray-700 text-center">
              Professional AC service to keep your air conditioning system
              clean, efficient, and running smoothly for long-lasting cooling
              performance.
            </p>
          </div>
        </div>

        {/* service 3 */}
        <div className="w-100 h-100 md:w-65 md:h-110 bg-gray-200 rounded-2xl border-2 border-gray-100 shadow-lg overflow-hidden transform transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-xl">
          <div className="relative w-full h-50">
            <Image
              src="/maintenance.webp"
              alt="AC Installation"
              fill
              className="object-cover rounded-t-2xl saturate-50"
            />
          </div>

          <div className="w-full pt-4 px-4 flex flex-col justify-center items-center space-y-2">
            <h3 className="text-2xl text-sky-700 font-semibold">
              AC Maintenance
            </h3>
            <p className="text-md text-gray-700 text-center">
              Regular AC maintenance service to ensure optimal performance,
              improve energy efficiency, and extend the lifespan of your air
              conditioning system.
            </p>
          </div>
        </div>

        {/* service 4 */}
        <div className="w-100 h-100 md:w-65 md:h-110 bg-gray-200 rounded-2xl border-2 border-gray-100 shadow-lg overflow-hidden transform transition-all duration-500 ease-out hover:scale-[1.02] hover:shadow-xl">
          <div className="relative w-full h-50">
            <Image
              src="/procurement.webp"
              alt="AC Installation"
              fill
              className="object-cover rounded-t-2xl saturate-50"
            />
          </div>

          <div className="w-full pt-4 px-4 flex flex-col justify-center items-center space-y-2">
            <h3 className="text-2xl text-sky-700 font-semibold">
              AC Procurement
            </h3>
            <p className="text-md text-gray-700 text-center">
              Reliable AC procurement solutions for offices, commercial spaces,
              and large-scale projects with quality products and professional
              support.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
