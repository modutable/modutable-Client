import React, { useState, useEffect } from "react";
import { JoinBar, Slide, Experience, NavBar, Reviews } from "../component/Event";
import "./Event.css";
import TabButton from "../component/common/header/TabButton";
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Autocomplete from "react-google-autocomplete";
import { Icon } from "antd";

const API_KEY = process.env.REACT_APP_google_API_KEY;

export default function Event(props) {
  const hostId = props.match.params.id;
  const [data, setData] = useState({});
  const [mapPosition, setMapPosition] = useState({ lat: 37.566535, lng: 126.9779692 });
  const [markerPosition, setMarkerPosition] = useState({ lat: 37.566535, lng: 126.9779692 });

  useEffect(() => {
    // Axios;
  }, []);

  const onPlaceSelected = () => {};

  const AsyncMap = withScriptjs(
    withGoogleMap(props => (
      <>
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
          <div
            style={{
              position: "absolute",
              top: "3%",
              left: "40%",
              width: "40%",
              color: "inherit"
            }}
          >
            <Autocomplete
              style={{
                position: "relative",
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
            <Icon type="search" style={{ position: "absolute", right: "5%", top: "15px" }} />
          </div>
        </GoogleMap>
      </>
    ))
  );
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <div className="Event-Header">
        <div className="Event-logoBox">
          <img src={require("../img/blackLogo.png")} className="Event-logo" />
        </div>
        <TabButton />
      </div>

      <Slide />

      <h1 id="Event-name">title</h1>
      <NavBar />
      <div style={{ padding: "2% 5%" }}>
        <Experience />
        <Reviews />

        <h3>Place & Amenities</h3>
        <div
          id="Place"
          style={{
            marginBottom: "150px",
            padding: "2% 5%",
            width: "100%",
            height: "40vh",
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

        <JoinBar />
      </div>
    </>
  );
}
