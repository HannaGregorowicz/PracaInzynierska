import React from "react";
import { useMediaQuery } from "react-responsive";
import PriceItem from "./PriceItem";
import { pricesList } from "./pricesData";

const gridDesktopStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr 1fr"
};

const gridTabletStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr"
};

const gridMobileStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr"
};

const formattedPrices = pricesList.map(priceObject => (
  <PriceItem
    name={priceObject.name}
    price={priceObject.price}
    info={priceObject.additionalInfo}
  />
));

const Prices = () => {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1200px)"
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 600px)"
  });

  return (
    <>
      <div className="bottomDivider"></div>
      <div className="contentContainer">
        <h2 className="center">Cennik zajęć</h2>
        <div
          style={
            isDesktop
              ? gridDesktopStyle
              : isMobile
              ? gridMobileStyle
              : gridTabletStyle
          }
        >
          {formattedPrices}
        </div>
        <h3 className="center">
          Honorujemy również karty Multisport Plus oraz OK System bez dopłat!
        </h3>
      </div>
      <div className="topDivider" />
    </>
  );
};

export default Prices;
