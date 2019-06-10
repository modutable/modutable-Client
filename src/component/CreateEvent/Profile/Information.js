import React, { Component } from "react";
import "./Information.css";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from "react-google-autocomplete";
import { Icon } from "antd";
import { debounce } from "lodash";

const API_KEY = process.env.REACT_APP_google_API_KEY;

Geocode.setApiKey(API_KEY);
Geocode.enableDebug();

export default class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      mapPosition: { lat: 0, lng: 0 },
      markerPosition: { lat: 0, lng: 0 }
    };
  }

  _queryHandler = address => {
    Geocode.fromAddress(address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        this.props.address(address);
        this.setState({ query: address, mapPosition: { lat, lng }, markerPosition: { lat, lng } });
      },
      error => {
        console.error(error);
      }
    );
  };

  _onPlaceSelected = ({ formatted_address }) => {
    console.log(formatted_address);
    this._queryHandler(formatted_address);
  };

  render() {
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
              onPlaceSelected={this._onPlaceSelected}
              types={["(regions)"]}
              placeholder="Search"
            />
            <Icon type="search" style={{ position: "absolute", top: 15, right: 10 }} />
          </div>
          <GoogleMap google={props.google} defaultZoom={19} defaultCenter={this.state.mapPosition}>
            <Marker
              google={props.google}
              draggable={true}
              // onDragEnd={this.onMarkerDragEnd}
              position={this.state.markerPosition}
            />
            <Marker />
            <InfoWindow
              position={{
                lat: this.state.markerPosition.lat + 0.0001,
                lng: this.state.markerPosition.lng
              }}
            >
              <div>
                <span style={{ padding: 0, margin: 0 }}>{this.state.query}</span>
              </div>
            </InfoWindow>
          </GoogleMap>
        </>
      ))
    );
    return (
      <div className="Information">
        {console.log("렌더됨")}
        <div className="Information-box">
          <h1>Information</h1>
          <h3>Eatwith is all about people! Help future guests get to know you.</h3>
        </div>
        <p />
        <div className="Information-box">
          <h3 style={{ fontWeight: "bold" }}>Phone Number</h3>
          <IntlTelInput
            containerClassName="intl-tel-input"
            inputClassName="form-control"
            onPhoneNumberChange={debounce(this.props.number, 500)}
          />
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
            <div style={{ height: "15%" }} />
            <AsyncMap
              googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&language=en&libraries=places`}
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
}
