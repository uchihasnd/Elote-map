import { useRef, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

import { DrawerContext } from "../utils/Context";
import { useContext } from "react";

export default function Map() {
  const mapRef = useRef<mapboxgl.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const drawerContext = useContext(DrawerContext);

  if (!drawerContext) {
    throw new Error("DrawerContext is not provided");
  }

  const { handleDrawerOpen } = drawerContext;

  useEffect(() => {
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_TOKEN;
    if (!mapContainerRef.current) return;
    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [-99.13225, 19.43248],
      zoom: 12,
    });

    new mapboxgl.Marker({ color: "#FF0000" })
      .setLngLat([-99.13225, 19.43248])
      .addClassName("cursor")
      .addTo(mapRef.current!);

    mapRef.current.on("dblclick", (e) => {
      const lngLat = e.lngLat;
      console.log(`Longitude: ${lngLat.lng}, Latitude: ${lngLat.lat}`);

      const marcador = new mapboxgl.Marker({ color: "#FF0000" })
        .setLngLat([lngLat.lng, lngLat.lat])
        .addTo(mapRef.current!);

      marcador.getElement().addEventListener("click", () => {
        handleDrawerOpen();
      });
    });

    new mapboxgl.Marker({ color: "#FF0000" })
      .setLngLat([-99.14447, 19.4349])
      .addTo(mapRef.current!);

    return () => {
      mapRef.current?.remove();
    };
  }, []);

  return (
    <>
      <div
        id="map-container"
        ref={mapContainerRef}
        style={{ width: "100%", height: "85vh" }}
        className="map"
      ></div>
    </>
  );
}
