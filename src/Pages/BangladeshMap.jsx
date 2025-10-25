import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import L from "leaflet";
import { useState } from "react";

// Custom marker icon
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const BangladeshMap = ({ serviceCenters }) => {
  const [searchText, setSearchText] = useState();
  const [flyToPos, setFlyToPos] = useState(null);

  console.log(searchText);
  const center = [23.685, 90.3563]; // Center of Bangladesh

  const FlyToLocation = ({ position }) => {
    const map = useMap();
    if (position) {
      map.flyTo(position, 12, { animate: true, duration: 2 });
    }
    return null;
  };

  const handleSearch = () => {
    const match = serviceCenters.find((center) =>
      center.district.toLowerCase().includes(searchText.toLowerCase())
    );
    if (match) {
      setFlyToPos([match.latitude, match.longitude]);
    } else {
      alert("District not  match");
    }
  };

  return (
    <div className="relative w-full h-[550px] shadow-lg overflow-hidden ">
      <div className="absolute top-4 left-16 z-[1000] border bg-white shadow-lg rounded flex items-center gap-2 p-2 w-[280px]">
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="input input-sm input-bordered w-ful"
          placeholder="district name"
        />
        <button
          onClick={handleSearch}
          className="btn bg-primary hover:bg-amber-500 text-white"
        >
          Go
        </button>
      </div>
      <MapContainer
        center={center}
        zoom={7}
        scrollWheelZoom={true}
        style={{ height: "500px", width: "100%" }}
      >
        {/* Free OpenStreetMap layer */}
        <TileLayer
          attribution="&copy; OpenStreetMap"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {flyToPos && <FlyToLocation position={flyToPos} />}

        {/* Show all districts from JSON */}
        {serviceCenters.map((center, index) => (
          <Marker
            key={index}
            position={[center.latitude, center.longitude]}
            icon={customIcon}
          >
            <Popup>
              <strong>{center.district}</strong>
              <br />
              {center.covered_area.join(", ")}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default BangladeshMap;
