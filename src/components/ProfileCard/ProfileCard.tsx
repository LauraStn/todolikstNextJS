import { ProfileProps, statusType } from "@/Utils/types";
import { Swanky_and_Moo_Moo } from "next/font/google";
import React from "react";

const ProfileCard = ({ image, fullName, status }: ProfileProps) => {
  let bgcolor: string = "";
  switch (status) {
    case statusType.Offline:
      bgcolor = "bg-red-400";
      break;
    case statusType.Online:
      bgcolor = "bg-green-400";
      break;
    case statusType.Busy:
      bgcolor = "bg-orange-400";
      break;
  }
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="relative">
        <img className="w-10 h-10 rounded-full" src={image} alt="" />
        <span
          className={`bottom-0 left-7 absolute  w-3.5 h-3.5 border-2 border-white dark:border-gray-800 rounded-full ${bgcolor}`}
        ></span>
      </div>
      <p>{fullName}</p>
    </div>
  );
};

export default ProfileCard;
