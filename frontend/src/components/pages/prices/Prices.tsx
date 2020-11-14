import React from "react";
import PriceItem from "./PriceItem";
import { pricesList } from "./pricesData";

const gridContainerStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr"
};

const formattedPrices = pricesList.map(priceObject => (
  <PriceItem
    name={priceObject.name}
    price={priceObject.price}
    info={priceObject.additionalInfo}
  />
));

const Prices = () => {
  return (
    <>
      <div className="bottomDivider"></div>
      <div className="contentContainer">
        <h2 className="center">Cennik zajęć</h2>
        <div style={gridContainerStyle}>{formattedPrices}</div>
        <h3 className="center">
          Honorujemy również karty Multisport Plus oraz OK System bez dopłat!
        </h3>
      </div>

      <div className="topDivider" />
    </>
  );
};

export default Prices;
