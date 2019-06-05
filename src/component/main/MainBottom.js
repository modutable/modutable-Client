import React, { useRef } from "react";
import { withRouter } from "react-router-dom";
import { Input, Button, DatePicker, Select, Icon } from "antd";
import "./MainBottom.css";
import AutoInput from "../../component/main/AutoInput";
import Axios from "axios";

export default withRouter(function MainBottom(props) {
  const city = useRef("");
  const date = useRef({});
  const guests = useRef("");

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
    console.log(city);
    props.history.push(
      `/search?query=${city.current}&date=${date.current}&guests=${guests.current}`
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
            <Option value="1">
              <Icon type="user" /> Guest 1
            </Option>
            <Option value="2">
              <Icon type="user" /> Guest 2
            </Option>
            <Option value="3">
              <Icon type="user" /> Guest 3
            </Option>
            <Option value="4">
              <Icon type="user" /> Guest 4
            </Option>
            <Option value="5">
              <Icon type="user" /> Guest 5
            </Option>
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
