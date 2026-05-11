import Banner from "@/sections/banner";
import AboutUs from "@/sections/about-us";
import Service from "@/sections/service";
import Gallery from "@/sections/gallery";
import Contact from "@/sections/contact";

export default function Home() {
  return (
    <div className="min-h-fit bg-white flex flex-col items-center pt-16 space-y-8 md:space-y-12">
      <Banner />
      <AboutUs />
      <Service />
      <Gallery />
      <Contact />
    </div>
  );
}
