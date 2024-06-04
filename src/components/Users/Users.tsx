import { Usersprops } from "@/Utils/types";
import React from "react";

const Users = ({ title, children }: Usersprops) => {
  return (
    <div>
      <h2 className="my-6 ml-8 text-2xl">{title}</h2>
      <div className="flex items-center gap-4 flex-wrap w-full">{children}</div>
    </div>
  );
};

export default Users;
