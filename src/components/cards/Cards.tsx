import { Cardsprops } from "@/Utils/types";
import React from "react";

const Cards = ({ title, children }: Cardsprops) => {
  return (
    <div>
      <h2 className="my-6 ml-8 text-2xl">{title}</h2>
      <div className="flex items-center w-full">{children}</div>
    </div>
  );
};

export default Cards;
