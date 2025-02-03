"use client";

import { useState, useEffect } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import HeaderTop from "./HeaderTop";
import Image from "next/image";
import logo from "../../public/home/logo.png";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: "About Us", href: "/about", current: false },
  { name: "Services", href: "/service", current: false },
  { name: "Careers", href: "/career", current: false },
  { name: "Contact Us", href: "/contact", current: false },
];

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic, e.g., send form data to API
    console.log("Form submitted with data:", formData);
    setFormData({ email: "", subject: "", message: "" }); // Clear the form
  };


  useEffect(() => {
    // Check if the dialog is supported in the client-side
    const modal = document.getElementById("my_modal_3");
    if (modal && isModalOpen) {
      modal.showModal();
    }
  }, [isModalOpen]);

  return (
    <>
      {/* Header top section */}
      <HeaderTop />

      {/* Navbar Section */}
      <Disclosure as="nav" className="py-3">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button */}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>

            <div className="flex flex-1 items-center justify-end sm:justify-between">
              <div className="flex shrink-0 items-center">
                <Link href={"/"}>
                  <Image src={logo} alt="logo" width={70} height={60} />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className="text-gray-800 rounded-md px-3 py-2 text-base font-medium"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>


            <button  onClick={() => setIsModalOpen((prev) => !prev)} className="bg-primary-dark py-3 font-medium ml-10  md:ml-5 px-5 text-white text-sm">
              {/* Modal Trigger */}
              GET A QUOTE
            </button>

            

            {/* Dialog Modal */}
            <dialog id="my_modal_3" className="modal">
              <div className="modal-box p-5 md:p-10">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 font-2xl">
                    ✕
                  </button>
                </form>
                



     <div className="font-sans text-base text-gray-900">
      <div className="text-base text-gray-900">
        <div className="mx-auto w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
          <div className="text-center md:mx-auto md:w-2/3 md:pb-12">
            <h2 className="text-2xl font-medium">
              Contact us fahim
            </h2>
          </div>
        </div>
      </div>
      <div className="mx-auto flex w-full max-w-screen-lg flex-col overflow-hidden rounded-xl text-gray-900 md:flex-row md:border md:shadow-lg">
        <form
          onSubmit={handleSubmit}
          className="mx-auto w-full max-w-xl border-gray-200 px-10 py-8 md:px-8"
        >
          <div className="mb-4">
            <label className="text mb-2 block font-medium" htmlFor="email">
              Your e-mail:
            </label>
            <input
              className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="text mb-2 block font-medium" htmlFor="subject">
              Subject:
            </label>
            <input
              className="w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
              id="subject"
              name="subject"
              type="text"
              value={formData.subject}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="mb-4">
            <label className="text mb-2 block font-medium" htmlFor="message">
              Message:
            </label>
            <textarea
              className="h-52 w-full rounded border border-gray-300 px-3 py-2 outline-none ring-blue-500 focus:ring"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            ></textarea>
          </div>
          <div className="flex items-center">
            <div className="flex-1"></div>
            <button
              className="rounded-xl bg-blue-600 px-4 py-3 text-center font-bold text-white hover:bg-blue-700"
              type="submit"
            >
              Send message
            </button>
          </div>
        </form>
        <div className="mt-10 bg-blue-600 px-10 py-8 text-gray-100 md:mt-0 md:ml-auto">
          <div>
            <p className="mb-4 font-medium border-b pb-2">OFFICE HOURS</p>
            <p className="mb-4">Monday – Thursday: 08:00 – 16:00</p>
            <p className="mb-4">Friday: 08:00 - 15:00</p>
            <p className="mb-4">Weekend: Closed</p>
            <p className="mb-4">
              Email:
              <a href="#" className="font-semibold underline">
                support@apps.io
              </a>
            </p>
            <p className="mb-4">
              Phone:
              <a href="#" className="font-semibold underline">
                +46 (0) 10-32 32 322
              </a>
            </p>
            <hr className="my-2 h-0 border-t border-r-0 border-b-0 border-l-0 border-gray-300" />
            <p className="mb-4">Org.no: 63452-2832</p>
            <p className="mb-4">VAT no: 32353</p>
          </div>
        </div>
      </div>
    </div>


              </div>
            </dialog>
          </div>
        </div>

        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {navigation.map((item) => (
              <DisclosureButton
                key={item.name}
                as="a"
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className="block rounded-md px-3 py-2 text-base font-medium"
              >
                {item.name}
              </DisclosureButton>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>
    </>
  );
}
