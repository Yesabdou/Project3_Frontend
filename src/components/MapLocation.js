import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map from "react-map-gl";
import { Marker } from "react-map-gl";

const Carte = () => {
  const onMarkerClick = (event) => {
    alert("Liste des equipement disponnible dans cette association : "); //  provisoire a remplacer avec une div cachée
    event.stopPropagation();
  };

  const style = {
    padding: "10px",
    color: "#fff",
    cursor: "pointer",
    background: "#1978c8",
    borderRadius: "6px",
  };
  return (
    <div className="carte">
      <Map
        mapboxAccessToken="pk.eyJ1IjoibXJkb3UiLCJhIjoiY2wxdmJydXA4MDU5eTNpb2h5bzF5emg1NyJ9.ryBHDt6d1JBVjXR29lUaqw"
        initialViewState={{
          longitude: 2.341178005531811,
          latitude: 48.85889775714565,
          zoom: 11,
        }}
        style={{ width: "100%", height: "520px" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker
          longitude={2.388215968089895}
          latitude={48.852487397292606}
          anchor="center"
          onClick={onMarkerClick}
        >
          <div style={style}> Show ✨</div>
        </Marker>
      </Map>
    </div>
  );
};

export default Carte;

//pour l'authenfication regarder le truc de robin projet management client    Client
