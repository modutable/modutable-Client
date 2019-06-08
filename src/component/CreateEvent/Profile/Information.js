import React, { useState, useEffect } from "react";
import "./Information.css";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from "react-google-autocomplete";
import { Icon } from "antd";

const API_KEY = process.env.REACT_APP_google_API_KEY;

Geocode.setApiKey(API_KEY);
Geocode.enableDebug();

export default function Information() {
  const [query, setQuery] = useState("");
  const [mapPosition, setMapPosition] = useState({ lat: 37.566535, lng: 126.9779692 });
  const [markerPosition, setMarkerPosition] = useState({ lat: 37.566535, lng: 126.9779692 });

  useEffect(() => {}, [query]);

  const _queryHandler = address => {
    console.log(address);
    setQuery(address);
  };

  const onPlaceSelected = () => {};

  const AsyncMap = withScriptjs(
    withGoogleMap(props => (
      <>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "40%",
            color: "inherit"
          }}
        >
          <Autocomplete
            style={{
              width: "100%",
              height: "40px",
              paddingLeft: "16px",
              marginTop: "2px",
              marginBottom: "0px",
              borderRadius: "5px",
              border: "1px solid #BDBDBD",
              fontColor: "#BDBDBD",
              fontSize: "16px"
            }}
            onPlaceSelected={onPlaceSelected}
            types={["(regions)"]}
            placeholder="Search"
            value={props.city}
          />
          <Icon type="search" style={{ position: "absolute", top: 15, right: 10 }} />
        </div>
        <GoogleMap google={props.google} defaultZoom={19} defaultCenter={mapPosition}>
          <Marker
            google={props.google}
            draggable={true}
            // onDragEnd={this.onMarkerDragEnd}
            position={markerPosition}
          />
          <Marker />
          <InfoWindow
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
      </>
    ))
  );

  return (
    <div className="Information">
      <div className="Information-box">
        <h1>Information</h1>
        <h3>Eatwith is all about people! Help future guests get to know you.</h3>
      </div>
      <p />
      <div className="Information-box">
        <h3 style={{ fontWeight: "bold" }}>Phone Number</h3>
        <IntlTelInput containerClassName="intl-tel-input" inputClassName="form-control" />
      </div>
      <p />
      <div>
        <h3 style={{ fontWeight: "bold" }}>Address</h3>

        <div
          id="Place"
          style={{
            position: "relative",
            padding: "2% 5%",
            width: "100%",
            height: "45vh"
          }}
        >
          <div style={{ height: "10%" }} />
          <AsyncMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places`}
            loadingElement={<div style={{ height: `95%` }} />}
            containerElement={<div style={{ height: "95%" }} />}
            mapElement={<div style={{ height: `95%` }} />}
          />
        </div>
        <p />
      </div>
    </div>
  );
}
