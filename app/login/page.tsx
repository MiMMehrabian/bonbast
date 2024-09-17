import Image from "next/image";
import Link from "next/link";
import React from "react";
import image from "@/images/image.svg";
const page = () => {
  return (
    <div className="h-screen bg-gray-100 text-gray-900 flex justify-center">
      <div className="m-0 sm:m-20 bg-white shadow sm:rounded-lg flex justify-center">
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-6">
          <div className="flex justify-center place-items-center w-full">
            <Link className="text-3xl font-bold" href={"/"}>
              BonBast
            </Link>
          </div>
          <div className="mt-12 flex flex-col items-center">
            <div className="w-full flex-1 mt-8">
              <div className="mx-auto max-w-xs">
                <input
                  className="w-full px-8 py-4 rounded-lg font-medium !bg-gray-100 border !border-gray-200 !placeholder-gray-500 text-sm focus:outline-none !focus:border-gray-400 !focus:bg-white"
                  type="email"
                  placeholder="Email"
                  autoComplete="off"
                />
                <input
                  autoComplete="off"
                  className="w-full px-8 py-4 rounded-lg font-medium !bg-gray-100 border !border-gray-200 !placeholder-gray-500 text-sm focus:outline-none !focus:border-gray-400 !focus:bg-white mt-5"
                  type="password"
                  placeholder="Password"
                />
                <button className="mt-5 tracking-wide font-semibold !bg-indigo-500 !text-gray-100 w-full py-4 rounded-lg hover:bg-indigo-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                  <svg
                    className="w-6 h-6 -ml-2"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                    <circle cx="8.5" cy="7" r="4" />
                    <path d="M20 8v6M23 11h-6" />
                  </svg>
                  <span className="ml-3">Sign In</span>
                </button>
                <p className="mt-6 text-xs text-gray-600 text-center">
                  I agree to abide by templatanas Terms of Service and its
                  Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-indigo-100 text-center hidden lg:flex">
          <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat bg-red-50">
            <Image
              className="object-contain h-full "
              src={image}
              width={1000}
              height={1000}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
