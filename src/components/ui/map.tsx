import { useEffect, useRef, useMemo } from "react";
import { Loader } from "@googlemaps/js-api-loader";

declare global {
  interface Window {
    google: typeof google;
  }
}

function Map({ address }: { address: string }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const geocoder = useMemo(() => new google.maps.Geocoder(), []);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
      version: "weekly",
    });
loader.load().then(() => {
      geocoder.geocode({ address: address }, (results : any, status) => {
        if (status === "OK") {
          const map = new google.maps.Map(mapRef.current as HTMLElement, {
            center: results[0]?.geometry.location,
            zoom: 8,
          });
const marker = new google.maps.Marker({
            map: map,
            position: results[0]?.geometry.location,
          });
        } else {
          console.error(`Geocode was not successful for the following reason: ${status}`);
        }
      });
    });
  }, [address, geocoder]);
return <div style={{ height: "400px" }} ref={mapRef} />;
}
export default Map;