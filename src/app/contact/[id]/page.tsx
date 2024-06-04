import { paramsProps } from "@/Utils/types";
import React from "react";

const contact = ({ params }: paramsProps) => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Contact id: {params.id}</h1>
    </main>
  );
};

export default contact;
