import React from "react";
import { withGoogleMap, withScriptjs } from "react-google-maps";
import Autocomplete from "react-google-autocomplete";
import { Icon } from "antd";
const API_KEY = process.env.REACT_APP_google_API_KEY;

export default function AutoInput(props) {
  const onPlaceSelected = place => {
    props.onChange(place);
  };

  const AsyncMap = withScriptjs(
    withGoogleMap(props => (
      <div style={{ position: "relative", color: "inherit" }}>
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
          placeholder="Search the city and select it from the space below."
          value={props.city}
        />
        <Icon type="search" style={{ position: "absolute", right: 10, top: 15 }} />
      </div>
    ))
  );
  return (
    <div>
      <AsyncMap
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${API_KEY}&language=en&libraries=places`}
        loadingElement={<div className="bbb" style={{ height: `50%` }} />}
        containerElement={<div style={{ height: props.height }} />}
        mapElement={<div className="aaa" style={{ height: `50%` }} />}
      />
    </div>
  );
}
