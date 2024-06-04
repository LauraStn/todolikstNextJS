import { paramsProps } from "@/Utils/types";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import { Footer } from "@/components/footer/footer";
import Header from "@/components/header";
import React from "react";

// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//   return res;
// };
const page = async ({ params }: paramsProps) => {
  // let myAge = 22;
  // let myName = "Laura";

  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Page id: {params.id}</h1>

        {/* <p>
        Bonjour je m'appelle {myName} et j'ai {myAge}ans.
      </p> */}
      </main>
      <Footer />
    </div>
  );
};

export default page;
