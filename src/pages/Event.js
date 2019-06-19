import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { changeData } from "../store/modules/viewEvent";
import { Modal, Tooltip } from "antd";
import Messenger from "../component/messages/Messenger";

import { JoinBar, Slide, Experience, NavBar, Reviews } from "../component/event";
import TabButton from "../component/common/header/TabButton";
import "./Event.css";
import { Icon } from "antd";

import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";
import Autocomplete from "react-google-autocomplete";
import Geocode from "react-geocode";
import Axios from "axios";

const API_KEY = process.env.REACT_APP_google_API_KEY;
const URL = process.env.REACT_APP_URL;

Geocode.setApiKey(API_KEY);
Geocode.enableDebug();

//function 시작;;
function Event(props) {
  const hostId = props.match.params.id;
  const [mapPosition, setMapPosition] = useState({ lat: 0, lng: 0 });
  const [markerPosition, setMarkerPosition] = useState({ lat: 0, lng: 0 });
  const [visible, setVisible] = useState(false);

  const { address, title, changeData, firstName, lastName } = props;

  useEffect(() => {
    const _getData = async () => {
      const selectData = await Axios.get(`${URL}/events/${hostId}`);
      changeData(selectData.data);
    };

    _getData();
  }, [changeData, hostId]);

  useEffect(() => {
    const _queryHandler = address => {
      Geocode.fromAddress(address).then(
        response => {
          const { lat, lng } = response.results[0].geometry.location;
          setMapPosition({ lat, lng });
          setMarkerPosition({ lat, lng });
        },
        error => {
          console.error(error);
        }
      );
    };
    if (address) {
      _queryHandler(address);
    }
  }, [address]);

  const onPlaceSelected = place => {
    props.history.push(`/search?query=${place.formatted_address}`);
  };

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
              <span style={{ padding: 0, margin: 0 }}>{address}</span>
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
          <img src={require("../img/blackLogo.png")} className="Event-logo" alt="logo" />
        </div>
        <TabButton />
      </div>

      <Slide />

      <h1 id="Event-name">{title}</h1>
      <NavBar />
      <div style={{ padding: "2% 5%" }}>
        <Experience />
        <Reviews id={hostId} />
        <h3>Place & Amenities</h3>
        <div
          id="Place"
          style={{
            padding: "2% 5%",
            width: "100%",
            height: "40vh"
          }}
        >
          <AsyncMap
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&libraries=places&language=en`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: "100%" }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
        </div>
        <div style={{ marginBottom: "150px" }}>
          <span style={{ fontFamily: "sans-serif", fontWeight: "bold", fontSize: "15pt" }}>
            Created By.
          </span>

          <span
            style={{
              fontFamily: "sans-serif",
              fontWeight: "bold",
              fontSize: "15pt",
              margin: "0 10px"
            }}
          >
            {"  "}
            {firstName} {lastName}
          </span>
          <Tooltip placement="top" title="Chatting">
            <Icon
              style={{ fontSize: "18pt", fontWeight: "bold", color: "#FF916A" }}
              onClick={() => {
                setVisible(true);
              }}
              type="message"
            />
          </Tooltip>
        </div>

        <Modal
          visible={visible}
          onCancel={() => {
            setVisible(visible ? false : true);
          }}
          width={"80%"}
          footer={null}
        >
          <Messenger props={props} />
        </Modal>
      </div>
      <JoinBar />
    </>
  );
}

//파라미터 받는 곳 필요한 리듀서 이름 넣고 이름.필요한 키이름
const mapStateToProps = ({ viewEvent }) => ({
  address: viewEvent.address,
  title: viewEvent.title,

  profileImg: viewEvent.user.profileImg,
  firstName: viewEvent.user.firstName,
  lastName: viewEvent.user.lastName,
  email: viewEvent.user.email,
  userId: viewEvent.user.id
});
// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
  // changeNumber: number => dispatch(changeNumber(number))
  changeData: data => dispatch(changeData(data))
});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Event);
