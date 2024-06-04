"use client";
import { Footer } from "@/components/footer/footer";
import Header from "@/components/header";
import React from "react";
import { RotatingLines } from "react-loader-spinner";

const contact = () => {
  return (
    <div>
      <Header />

      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Contact us for more information</h1>
        <div className="flex align-middle flex-row justify-between">
          <div className="p-2">
            <input type="checkbox" className="h-6 w-6 " value="true" />
          </div>
          <div className="p-2">
            <p className="text-lg text-white">Wash disc</p>
          </div>
          <button className="flex text-red-500 border-2 border-red-500 p-2 rounded-lg">
            <svg
              className="h-6 w-6 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              {" "}
              <circle cx="12" cy="12" r="10" />{" "}
              <line x1="15" y1="9" x2="9" y2="15" />{" "}
              <line x1="9" y1="9" x2="15" y2="15" />
            </svg>
            <span>Remove</span>
          </button>
        </div>
        <RotatingLines
          visible={true}
          width="96"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
      </main>
      <Footer />
    </div>
  );
};

export default contact;
