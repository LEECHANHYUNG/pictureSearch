import React, { useEffect } from "react";
import "../../style/HeartList.css";
import PictureCard from "../Main/PictureCard";
const HeartListContainer = () => {
  const item = {
    href: "https://images-assets.nasa.gov/image/PIA04634/collection.json",
    data: [
      {
        center: "JPL",
        title: "Galaxy NGC5474",
        nasa_id: "PIA04634",
        date_created: "2003-07-25T16:20:14Z",
        keywords: ["Galaxy Evolution Explorer GALEX", "NGC5474"],
        media_type: "image",
        description_508:
          "NASA Galaxy Evolution Explorer took this ultraviolet color image of the galaxy NGC5474 on June 7, 2003. NGC5474 is located 20 million light-years from Earth and is within a group of galaxies dominated by the Messier 101 galaxy.",
        secondary_creator: "NASA/JPL/Caltech",
        description:
          "NASA Galaxy Evolution Explorer took this ultraviolet color image of the galaxy NGC5474 on June 7, 2003. NGC5474 is located 20 million light-years from Earth and is within a group of galaxies dominated by the Messier 101 galaxy. Star formation in this galaxy shows some evidence of a disturbed spiral pattern, which may have been induced by tidal interactions with Messier 101.  http://photojournal.jpl.nasa.gov/catalog/PIA04634",
      },
    ],
    links: [
      {
        href:
          "https://images-assets.nasa.gov/image/PIA04634/PIA04634~thumb.jpg",
        rel: "preview",
        render: "image",
      },
    ],
  };
  return (
    <section className="heart-list-container">
      <header>좋아요 리스트 </header>
      <div className="heart-list-item">
        <PictureCard item={item} />
        <PictureCard item={item} />
        <PictureCard item={item} />
      </div>
    </section>
  );
};

export default HeartListContainer;
