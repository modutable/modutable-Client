import React, { useState } from "react";
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
const API_KEY = process.env.REACT_APP_google_API_KEY;

Geocode.setApiKey(API_KEY);
Geocode.enableDebug();

export default function Place() {
  const [mapPosition, setMapPosition] = useState({ lat: 37.566535, lng: 126.9779692 });
  const [markerPosition, setMarkerPosition] = useState({ lat: 37.566535, lng: 126.9779692 });

  const AsyncMap = withScriptjs(
    withGoogleMap(props => (
      <GoogleMap google={props.google} defaultZoom={19} defaultCenter={mapPosition}>
        <Marker
          google={props.google}
          draggable={true}
          // onDragEnd={this.onMarkerDragEnd}
          position={markerPosition}
        />
        <Marker />
        <InfoWindow
          onClose={""}
          position={{
            lat: markerPosition.lat + 0.0001,
            lng: markerPosition.lng
          }}
        >
          <div>
            <span style={{ padding: 0, margin: 0 }}>aaa</span>
          </div>
        </InfoWindow>
      </GoogleMap>
    ))
  );

  return (
    <>
      <h3>Place & Amenities</h3>
      <div
        id="Place"
        style={{
          marginBottom: "150px",
          padding: "2% 5%",
          width: "100%",
          height: "50vh",
          border: "1px solid red"
        }}
      >
        <AsyncMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: "100%" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    </>
  );
}
