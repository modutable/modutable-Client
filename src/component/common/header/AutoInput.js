import React from "react";
import { withGoogleMap, withScriptjs } from "react-google-maps";
import Autocomplete from "react-google-autocomplete";
import { Icon } from "antd";
import { withRouter } from "react-router-dom";
const API_KEY = process.env.REACT_APP_google_API_KEY;

export default withRouter(function AutoInput(props) {
  const onPlaceSelected = place => {
    if (props.flag === "main") {
      props.onChange(place.formatted_address);
    } else if (props.flag === "signUp") {
      props.onChange(place.formatted_address);
    } else {
      props.history.push(`/search?query=${place.formatted_address}`);
    }
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
          placeholder={props.city || "Select it from the space below."}
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
});
