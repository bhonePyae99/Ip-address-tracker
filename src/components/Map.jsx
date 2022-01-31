import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
const Map = ({ location }) => {
  let position = [];
  if (Object.keys(location).length !== 0) {
    position = [location.location.lat, location.location.lng];
  }
  return (
    <div
      className="container-fluid bottom p-0 position-relative"
      style={{ zIndex: "1" }}
    >
      {position.length !== 0 && (
        <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </div>
  );
};

export default Map;
