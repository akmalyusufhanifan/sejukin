"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Banner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    setShowBanner(true);
  }, []);
  return (
    <section
      id="banner"
      className={`w-full transition-all duration-1500 ease-out scroll-mt-20 ${
        showBanner ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      {/* mobile */}
      <Image
        src="/banner-mobile.webp"
        alt="Banner Sejukin"
        width={400}
        height={500}
        className="w-full lg:hidden"
      />

      {/* desktop */}
      <div className="hidden lg:block relative w-full aspect-2/1">
        <Image
          src="/banner-desktop.webp"
          alt="Banner Sejukin"
          fill
          sizes="(min-width: 1024px) 100vw"
          className="object-cover"
          priority
        />
      </div>
    </section>
  );
}
