import React, { useRef } from "react";
import { withRouter } from "react-router-dom";
import { Input, Button, DatePicker, Select, Icon, message } from "antd";
import "./MainBottom.css";
import AutoInput from "../../component/common/header/AutoInput";

export default withRouter(function MainBottom(props) {
  const city = useRef(null);
  const date = useRef(null);
  const guests = useRef(null);

  const guestArray = [1, 2, 3, 4, 5];

  const _setCity = n => {
    console.log("여기", n);
    city.current = n;
  };
  const _setDate = n => {
    console.log(n);
    date.current = n._d;
  };
  const _setGuests = n => {
    console.log(n);
    guests.current = n;
  };
  const InputGroup = Input.Group;
  const { Option } = Select;

  const _onClick = e => {
    if (city.current && date.current && guests.current) {
      console.log("!!!!!", city.current, date.current, guests.current);
      props.history.push(
        `/search?query=${city.current}&date=${date.current}&guests=${guests.current}`
      );
    } else {
      message.error("전부 입력해주셔야합니다.");
    }
  };

  return (
    <div id="Bottom-body">
      <h3 className="Bottom-searchBar" style={{ fontWeight: "bold", textAlign: "left" }}>
        What are you looking for?
      </h3>

      <div className="Bottom-searchBar">
        <AutoInput onChange={_setCity} flag="main" />
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
