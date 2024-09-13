// components/CovidMap.tsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { CountryCovidData } from "./CaseInfo";

// Default icon setup to avoid leaflet icon issue
const DefaultIcon = L.icon({
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

// Interface for props
interface CovidMapProps {
  data: CountryCovidData[];
}

const CovidMap: React.FC<CovidMapProps> = ({ data }) => {
  return (
    <MapContainer
      center={[20, 0]} // Center the map on the equator and prime meridian
      zoom={2} // Set the zoom level to show the entire world
      style={{ height: "100vh", width: "100%" }} // Full viewport height and width
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // OpenStreetMap tile URL
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' // Attribution text
      />
      {data.map((country) => (
        <Marker
          key={country.countryInfo._id} // Unique key for each marker
          position={[country.countryInfo.lat, country.countryInfo.long]} // Marker position based on latitude and longitude
        >
          <Popup>
            <strong>{country.country}</strong>
            <br />
            Active cases: {country.active}
            <br />
            Recovered cases: {country.recovered}
            <br />
            Deaths: {country.deaths}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CovidMap;