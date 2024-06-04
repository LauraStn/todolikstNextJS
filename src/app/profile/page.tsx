import ProfileCard from "@/components/ProfileCard/ProfileCard";
import Users from "@/components/Users/Users";
import { Footer } from "@/components/footer/footer";
import Header from "@/components/header";
import User from "@/components/user/User";
import React from "react";

const profile = () => {
  return (
    <div>
      <Header />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Acteurs</h1>

        {/* <Users title="Most populars">
          <User
            fullName="Dwayne Johnson"
            image="https://www.programme-tv.net/imgre/fit/~2~providerPerson~53be51e81a53a968.jpeg/300x300/quality/80/crop-from/top/dwayne-johnson.jpeg"
            job="Acteur/Catcheur"
            biographie="Dwayne Johnson, également connu sous le surnom de The Rock, est un acteur, producteur, catcheur (lutteur professionnel) américano-canadien, né le 2 mai 1972 à Hayward (Californie)."
          />
          <User
            fullName="Henry Cavill"
            image="https://sf1.closermag.fr/wp-content/uploads/closermag/2023/04/Henry-Cavill.jpg"
            job="Acteur"
            biographie="Henry William Dalgliesh Cavill, né le 5 mai 1983 à Saint-Hélier, est un acteur britannique.
            Il est principalement connu pour son rôle de Charles Brandon dans Les Tudors puis de Superman dans cinq films de l'univers cinématographique DC"
          />
        </Users> */}
      </main>
      <Footer />
    </div>
  );
};

export default profile;
