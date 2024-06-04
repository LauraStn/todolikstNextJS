import { Userprops } from "@/Utils/types";
import React from "react";

const User = ({ image, fullName, job, biographie }: Userprops) => {
  return (
    <div className="max-w-lg h-[650] mx-auto my-10 bg-cyan-900 rounded-lg shadow-md p-5">
      <img
        className="w-32 h-32 rounded-full mx-auto"
        src={image}
        alt="Profile picture"
      />
      <h2 className="text-center text-2xl font-semibold mt-3"> {fullName}</h2>
      <p className="text-center text-black mt-1">{job}</p>
      <div className="mt-5">
        <h3 className="text-xl font-semibold">Bio</h3>
        <p className="text-black mt-2">{biographie}</p>
      </div>
    </div>
  );
};

export default User;
