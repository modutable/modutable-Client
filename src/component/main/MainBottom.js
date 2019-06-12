import React, { useRef, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { Input, Button, DatePicker, Select, Icon } from "antd";
import "./MainBottom.css";
import AutoInput from "../../component/common/header/AutoInput";

export default withRouter(function MainBottom(props) {
  const city = useRef("");
  const date = useRef({});
  const guests = useRef("");

  const guestArray = [1, 2, 3, 4, 5];

  const _setCity = n => {
    city.current = n;
  };
  const _setDate = n => {
    date.current = n._d;
  };
  const _setGuests = n => {
    guests.current = n;
  };
  const InputGroup = Input.Group;
  const { Option } = Select;

  const _onClick = e => {
    console.log(city.current);
    props.history.push(
      `/search?query=${city.current.formatted_address}&date=${date.current}&guests=${
        guests.current
      }`
    );
  };

  return (
    <div id="Bottom-body">
      <h3 className="Bottom-searchBar" style={{ fontWeight: "bold", textAlign: "left" }}>
        What are you looking for?
      </h3>

      <div className="Bottom-searchBar">
        <AutoInput onChange={_setCity} city={city} />
      </div>

      <div className="Bottom-searchBar">
        <DatePicker onChange={_setDate} className="Bottom-searchBarUnit" size="large" />
      </div>

      <div className="Bottom-searchBar">
        <InputGroup className="Bottom-searchBarUnit">
          <Select
            className="Bottom-searchBarUnit"
            onChange={_setGuests}
            size="large"
            icon={<Icon type="user" />}
            defaultValue="Guests"
          >
            {guestArray.map((guest, i) => {
              return (
                <Option key={i} value={guest}>
                  <Icon type="user" /> Guest {guest}
                </Option>
              );
            })}
          </Select>
        </InputGroup>
      </div>

      <div className="Bottom-searchBar">
        <Button onClick={_onClick} className="Bottom-searchBarUnit" size="large">
          Search
        </Button>
      </div>
    </div>
  );
});
