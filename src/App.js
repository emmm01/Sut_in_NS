import "./styles.css";
import "leaflet/dist//leaflet.css";
//import lunenburg_hdr from "./img/lunenburg_hdr";

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { Icon } from "leaflet";

export default function App() {
  const markers = [
    {
      geocode: [44.377282, -64.3116988],
      popUp: "Lunenburg (:",
    },
  ];

  const customIcon = new Icon({
    iconUrl: require("./img/lunenburg_hdr.png"),
    iconSize: [40, 40],
    //iconUrl: "https://www.novascotia.com/sites/default/files/2019-05/Fisheries%20Museum%20of%20the%20Atlantic%201920x1080.jpg"
  });

  return (
    <MapContainer center={[45, -63]} zoom={7}>
      <TileLayer
        attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers.map((marker) => (
        <Marker position={marker.geocode} icon={customIcon}>
          <Popup>{marker.popUp}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
