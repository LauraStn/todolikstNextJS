"use client";

import { statusType } from "@/Utils/types";
import ProfileCard from "@/components/ProfileCard/ProfileCard";
import { Card } from "@/components/card/card";
import Cards from "@/components/cards/Cards";
import { Footer } from "@/components/footer/footer";
import Header from "@/components/header";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaAccessibleIcon } from "react-icons/fa";
import { FaBomb } from "react-icons/fa6";
import { Hearts, RotatingLines } from "react-loader-spinner";

export default function Home() {
  const router = useRouter();
  return (
    <div>
      <Header />
      <main className="flex min-h-screen items-center justify-between p-24">
        <div className="w-full h-screen bg-gray-100 pt-8">
          <div className="w-full h-screen bg-gray-100 pt-8">
            <div className="bg-white p-3 max-w-md mx-auto">
              <div className="text-center">
                <h1 className="text-3xl font-bold">ToDo App</h1>
                <div className="mt-4 flex">
                  <input
                    className="w-80 border-b-2 border-gray-500 text-black"
                    type="text"
                    placeholder="Enter your task here"
                  />
                  <button className="ml-2 border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex">
                    <svg
                      className="h-6 w-6"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path stroke="none" d="M0 0h24v24H0z" />{" "}
                      <circle cx="12" cy="12" r="9" />{" "}
                      <line x1="9" y1="12" x2="15" y2="12" />{" "}
                      <line x1="12" y1="9" x2="12" y2="15" />
                    </svg>
                    <span>Add</span>
                  </button>
                </div>
              </div>
              <div className="mt-8">
                <ul>
                  <li className="p-2 rounded-lg">
                    <div className="flex align-middle flex-row justify-between">
                      <div className="p-2">
                        <input
                          type="checkbox"
                          className="h-6 w-6 "
                          value="true"
                          checked
                        />
                      </div>
                      <div className="p-2">
                        <p className="text-lg line-through text-gray-400">
                          Cook maggie
                        </p>
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
                    <hr className="mt-2" />
                  </li>
                  <li className="p-2 rounded-lg">
                    <div className="flex align-middle flex-row justify-between">
                      <div className="p-2">
                        <input
                          type="checkbox"
                          className="h-6 w-6 "
                          value="true"
                        />
                      </div>
                      <div className="p-2">
                        <p className="text-lg text-black">Wash disc</p>
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
                    <hr className="mt-2" />
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <button className="border-2 border-red-500 p-2 text-red-500">
                  Clear Completed Task
                </button>
                <button className="border-2 border-indigo-500 p-2 text-indigo-500 ml-4">
                  Reset Todo List
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <h1>This is home page for our services - Pathe Simplon company</h1> */}
        {/* <ProfileCard
          image={
            "https://img.freepik.com/photos-gratuite/femme-heureuse-maison-pendant-quarantaine-du-coronavirus_53876-137722.jpg?t=st=1717399705~exp=1717403305~hmac=0c06e98995af2e12036c0da9682c2ab8f523ce78d3516b3a04cb26afacf0010a&w=740"
          }
          fullName={"Sarah Doe"}
          status={statusType.Online}
        />
        <ProfileCard
          image={
            "https://img.freepik.com/photos-gratuite/portrait-jolie-femme-souriante_23-2148729675.jpg?t=st=1717399972~exp=1717403572~hmac=208bf1f8590ece93defe8951d72d00894ff650793ed2b1fe8582dcacf85f9a71&w=740"
          }
          fullName={"Janis Taylor"}
          status={statusType.Online}
        />
        <ProfileCard
          image={
            "https://img.freepik.com/photos-gratuite/portrait-souriant-charmant-jeune-homme-t-shirt-gris-se-tenant-fond-uni_23-2148213406.jpg?t=st=1717400059~exp=1717403659~hmac=50c6b106a3f9fbccccbca1742067a12fe61bbc75bc9c1c3ca4e6bce44904fc35&w=740"
          }
          fullName={"Ernest King"}
          status={statusType.Offline}
        />
        <ProfileCard
          image={
            "https://img.freepik.com/photos-gratuite/sourire-jeune-homme-bras-croises-plein-air_1140-255.jpg?t=st=1717400115~exp=1717403715~hmac=c1859ace464e798ad59a4f84422e7dd2affda3351358cef3ecbf226b9aefdc43&w=740"
          }
          fullName={"David Hardee"}
          status={statusType.Online}
        />
        <ProfileCard
          image={
            "https://img.freepik.com/photos-gratuite/portrait-jeune-jolie-femme-exterieur_624325-2285.jpg?t=st=1717400213~exp=1717403813~hmac=d1dd215563f3e7cf8e99ec0f8500a507bba6152a4ff0e88d7ecbecae5642eb4e&w=740"
          }
          fullName={"Rachel Gilbert"}
          status={statusType.Busy}
        />
        <ProfileCard
          image={
            "https://img.freepik.com/photos-gratuite/confiant-jeune-homme-ses-bras-croises-debout-plage_23-2148103078.jpg?t=st=1717400164~exp=1717403764~hmac=4e4051072f5c9f62123f6c8e9e90583f22459bbc0b5a4e9ed83346f1a80422be&w=740"
          }
          fullName={"Bill Crook"}
          status={statusType.Online}
        /> */}
        {/* <button
          className="w-32 h-8 bg-green-400 flex items-center justify-around text-white p-2 m-4 rounded-md"
          onClick={() => {
            toast.success("Login successfull");
          }}
        >
          <FaAccessibleIcon />
          Success
        </button>
        <button
          className="w-32 h-8 bg-red-400 flex items-center justify-around text-white p-2 m-4 rounded-md"
          onClick={() => {
            toast.error("Kaboom !!!!");
          }}
        >
          <FaBomb color="black" />
          Failed
        </button>
        <RotatingLines
          visible={true}
          width="96"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
        />
        <Cards title="Our Childhood Heroes">
          <Card
            name="Jimmy neutron"
            image="https://ih1.redbubble.net/image.273313361.1479/flat,750x,075,f-pad,750x1000,f8f8f8.u7.jpg"
            job={"Apprenti ingénieur"}
          />
          <Card
            name="Sangoku"
            image="https://store-images.s-microsoft.com/image/apps.27838.13687659141052070.597c3f80-25bd-4e0f-9e57-c5b222575852.9cce8847-c517-4297-a8d1-f773dc56f8cb?q=90&w=480&h=270"
            job={"Casseur de machoire"}
          />
          <Card
            name="Digimon"
            image="https://www.mangatori.fr/1828711-large_default/megahouse-meho834462-digimon-adventure-look-up-gabumon-11-cm.jpg"
            job={"Monstre de combat"}
          />
        </Cards> */}
        {/* <ul>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/profile">Profile</Link>
          </li>
          <li
            onClick={() => {
              router.push("/profile/123456");
            }}
          >
            Self profile
          </li>
        </ul> */}
      </main>
      <Footer />
    </div>
  );
}
