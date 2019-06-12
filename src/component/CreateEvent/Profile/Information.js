import React, { Component } from "react";
import "./Information.css";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Geocode from "react-geocode";
import Autocomplete from "react-google-autocomplete";
import { Icon, Alert } from "antd";
import { debounce } from "lodash";
import { changeNumber, changeAddress } from "../../../store/modules/createProfile";
import { connect } from "react-redux";

const API_KEY = process.env.REACT_APP_google_API_KEY;

Geocode.setApiKey(API_KEY);
Geocode.enableDebug();

class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
      query: "",
      mapPosition: { lat: 0, lng: 0 },
      markerPosition: { lat: 0, lng: 0 }
    };
  }

  _queryHandler = address => {
    Geocode.fromAddress(address).then(
      response => {
        const { lat, lng } = response.results[0].geometry.location;
        this.setState({ query: address, mapPosition: { lat, lng }, markerPosition: { lat, lng } });
      },
      error => {
        console.error(error);
      }
    );
  };

  _onPlaceSelected = ({ formatted_address }) => {
    this.props.changeAddress(formatted_address);
    this._queryHandler(formatted_address);
  };

  _onChangedPhone = (form, value, { dialCode }) => {
    if (form) {
      this.props.changeNumber(dialCode + ") " + value);
      this.setState({ toggle: false });
    } else {
      this.setState({ toggle: true });
    }
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
            <Marker google={props.google} draggable={true} position={this.state.markerPosition} />
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
            onPhoneNumberChange={debounce(this._onChangedPhone, 500)}
          />
        </div>

        <p />

        <div>
          <Alert
            message="Phone number & Address Must fill"
            type="error"
            showIcon
            style={this.state.toggle ? { display: "block" } : { display: "none" }}
          />
        </div>
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

const mapStateToProps = ({ createProfile }) => ({
  number: createProfile.number,
  address: createProfile.address
});

// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
  changeNumber: number => dispatch(changeNumber(number)),
  changeAddress: address => dispatch(changeAddress(address))
});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Information);
