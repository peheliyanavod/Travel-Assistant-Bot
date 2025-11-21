import React from "react";

import HeroSlider from "./HeroSlider";
import About from "./About";
import PopularDestinations from "./PopularDestinations";
import TravelPackages from "./TravelPackages";
import Services from "./Services";
import Action from "./Action";

function Home() {
  return (
    <div>
      {/* === Hero Slider === */}
      <HeroSlider />

      {/* === About Section === */}
      <About />

      {/* === Popular Destinations === */}
      <PopularDestinations />

      {/* === Travel Packages === */}
      <TravelPackages />

      {/* === Why Choose Us === */}
      <Services />

      {/* === Call to Action === */}
      <Action />
    </div>
  );
}

export default Home;
