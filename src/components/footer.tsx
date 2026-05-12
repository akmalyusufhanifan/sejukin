import Image from "next/image";
import { MdOutlineLocalPhone } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="min-h-fit bg-white flex flex-col gap-6 px-8 py-8 lg:gap-12 lg:px-40 lg:py-12">
      <div className="flex flex-col items-start gap-6 lg:flex-row lg:justify-between">
        <div>
          <div className="relative w-35 h-15">
            <Image
              src="/logo.webp"
              alt="Sejukin's Logo"
              fill
              className="object-cover"
            />
          </div>

          <p className="text-sm text-gray-700 leading-8 lg:max-w-100">
            From installation to maintenance, Sejukin delivers professional
            cooling solutions designed for long-term comfort, performance, and
            reliability
          </p>
        </div>

        <div className="border-t border-gray-300 w-full lg:hidden"></div>

        {/* contact */}
        <div className="flex flex-col gap-4">
          <h5 className="text-md text-gray-700 font-semibold">Contact:</h5>

          <div className="text-gray-700 text-sm tracking-wide flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <MdOutlineLocalPhone className="text-lg" />
              <h5>Phone: 0812-3456-2789</h5>
            </div>

            <div className="flex items-center gap-2">
              <MdMailOutline className="text-lg" />
              <h5>Email: sejukin@gmail.com</h5>
            </div>

            <div className="flex items-center gap-2">
              <FaInstagram className="text-lg" />
              <h5>Instagram: @Sejuk.In</h5>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 w-full lg:hidden"></div>

        {/* address */}
        <div className="flex flex-col gap-4">
          <h5 className="text-md text-gray-700 font-semibold">Address:</h5>

          <div className="flex items-center gap-2 text-gray-700 text-sm tracking-wide">
            <IoLocationOutline className="text-lg" />
            <h5>Jalan Dummy No. 123, Indonesia</h5>
          </div>
        </div>

        <div className="border-t border-gray-300 w-full lg:hidden"></div>

        {/* Service */}
        <div className="flex flex-col gap-4">
          <h5 className="text-md text-gray-700 font-semibold">Services:</h5>

          <div className="text-sm text-gray-700 tracking-wide flex flex-col gap-2">
            <a href="#service" className="hover:text-gray-400">
              AC Installation
            </a>
            <a href="#service" className="hover:text-gray-400">
              AC Service
            </a>
            <a href="#service" className="hover:text-gray-400">
              AC Maintenance
            </a>
            <a href="#service" className="hover:text-gray-400">
              AC Procurement
            </a>
          </div>
        </div>

        <div className="border-t border-gray-300 w-full lg:hidden"></div>
      </div>

      <div className="hidden border-t border-gray-300 w-full lg:flex"></div>

      {/* copyrights */}
      <h5 className="text-sm text-gray-700 lg:text-center">
        © 2026 Sejukin. All Rights Reserved. Published by Akmal Yusuf Hanifan
      </h5>
    </footer>
  );
}
