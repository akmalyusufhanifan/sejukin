import { MdOutlineLocalPhone } from "react-icons/md";
import { MdMailOutline } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import Form from "@/components/form";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-fit bg-gray-200 w-full flex flex-col items-center px-8 pt-8 pb-12 lg:pt-2 lg:px-40 lg:flex-row lg:justify-between scroll-mt-15"
    >
      <div className="w-full max-w-125">
        <div className="flex flex-col items-start space-y-4">
          <h2 className="text-3xl text-sky-700 font-semibold md:text-4xl">
            Let's Talk
          </h2>

          <p className="text-lg leading-8 text-gray-700">
            Experiencing issues with your air conditioner? Click the button
            below and our professional technicians will promptly assist you at
            your location.
          </p>
        </div>

        {/* phone */}
        <div className="w-full flex items-center space-x-4 border-b-2 border-gray-300 pb-4 mt-8">
          <MdOutlineLocalPhone className="text-4xl text-sky-700" />
          <div className="text-lg text-gray-700">
            <h4>Phone</h4>
            <h4>0812-3456-2789</h4>
          </div>
        </div>

        {/* email */}
        <div className="w-full flex items-center space-x-4 border-b-2 border-gray-300 pb-4 mt-4">
          <MdMailOutline className="text-4xl text-sky-700" />
          <div className="text-lg text-gray-700">
            <h4>Email</h4>
            <h4>sejukin@gmail.com</h4>
          </div>
        </div>

        {/* instagram */}
        <div className="w-full flex items-center space-x-4 border-b-2 border-gray-300 pb-4 mt-4">
          <FaInstagram className="text-4xl text-sky-700" />
          <div className="text-lg text-gray-700">
            <h4>Instagram</h4>
            <h4>@Sejuk.In</h4>
          </div>
        </div>

        {/* maps */}
        <div className="w-full flex items-center space-x-4 border-b-2 border-gray-300 pb-4 mt-4">
          <IoLocationOutline className="text-4xl text-sky-700" />
          <div className="text-lg text-gray-700">
            <h4>Address</h4>
            <h4>Jalan Dummy No. 123, Indonesia</h4>
          </div>
        </div>
      </div>

      {/* form */}
      <Form />
    </section>
  );
}
