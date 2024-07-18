import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h2>Check out these EPIC Destinations!</h2>
      <div className="cards__wrapper">
        <ul className="cards__items">
          <CardItem
            src="images/img-9.jpg"
            text="Explore the hidden waterfall deep inside the Amazon Jungle"
            label="Adventure"
            path="/services"
            detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum eros odio, ut ultrices diam finibus vel. Fusce consectetur, mauris a suscipit elementum, nisl sapien aliquam lectus, quis tincidunt urna libero et nulla."
          />
          <CardItem
            src="images/img-8.jpg"
            text="Explore the Sahara desert in the African wasteland"
            label="Adventure"
            path="/services"
            detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum eros odio, ut ultrices diam finibus vel. Fusce consectetur, mauris a suscipit elementum, nisl sapien aliquam lectus, quis tincidunt urna libero et nulla."
          />
        </ul>

        <ul className="cards__items">
          <CardItem
            src="images/img-7.jpg"
            text="Never give up"
            label="Adventure"
            path="/services"
            detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum eros odio, ut ultrices diam finibus vel. Fusce consectetur, mauris a suscipit elementum, nisl sapien aliquam lectus, quis tincidunt urna libero et nulla."
          />
          <CardItem
            src="images/img-6.jpg"
            text="Dangerous Earthquake in the America"
            label="Dangerous"
            path="/services"
            detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum eros odio, ut ultrices diam finibus vel. Fusce consectetur, mauris a suscipit elementum, nisl sapien aliquam lectus, quis tincidunt urna libero et nulla."
          />

          <CardItem
            src="images/img-5.jpg"
            text="The Ritz Carlton"
            label="Luxury"
            path="/services"
            detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum eros odio, ut ultrices diam finibus vel. Fusce consectetur, mauris a suscipit elementum, nisl sapien aliquam lectus, quis tincidunt urna libero et nulla."
          />
        </ul>
        <ul className="cards__items">
          <CardItem
            src="images/img-4.jpg"
            text="A football ground on the Island"
            label="Football"
            path="/services"
            detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum eros odio, ut ultrices diam finibus vel. Fusce consectetur, mauris a suscipit elementum, nisl sapien aliquam lectus, quis tincidunt urna libero et nulla."
          />

          <CardItem
            src="images/img-3.jpg"
            text="Two boats in the American Ocean"
            label="Dangerous"
            path="/services"
            detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum eros odio, ut ultrices diam finibus vel. Fusce consectetur, mauris a suscipit elementum, nisl sapien aliquam lectus, quis tincidunt urna libero et nulla."
          />
          <CardItem
            src="images/img-2.jpg"
            text="A beautiful beach in the United States"
            label="Beautiful"
            path="/services"
            detail="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vestibulum eros odio, ut ultrices diam finibus vel. Fusce consectetur, mauris a suscipit elementum, nisl sapien aliquam lectus, quis tincidunt urna libero et nulla."
          />
        </ul>
      </div>
    </div>
  );
}

export default Cards;
