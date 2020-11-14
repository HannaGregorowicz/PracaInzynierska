import React, { useEffect } from "react";
declare global {
  interface Window {
    H: any;
  }
}

const Map = () => {
  const lat = 51.1103;
  const lng = 17.0301;

  useEffect(() => {
    let H = (window as any).H;
    const platform = new H.service.Platform({
      apikey: "HqZifCvhEtuXM9_ffh5bN8dNAYcLCmPCgc24aUFf3y8"
    });
    const defaultLayers = platform.createDefaultLayers();
    const map = new H.Map(
      document.getElementById("map"),
      defaultLayers.vector.normal.map,
      {
        center: { lat: lat, lng: lng },
        zoom: 15
      }
    );
    const marker = new H.map.Marker({ lat: lat, lng: lng });
    map.addObject(marker);

    window.addEventListener("resize", () => map.getViewPort().resize());
    new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    H.ui.UI.createDefault(map, defaultLayers);
  });

  return <div className="map gridItem" id="map"></div>;
};
export default Map;
