import React, { useRef, useState } from "react";
import { withRouter } from "react-router-dom";
import { Input, Button, DatePicker, Select, Icon, message, Modal } from "antd";
import "./MainBottom.css";
import AutoInput from "../../component/common/header/AutoInput";
import moment from "moment";
import Policy from "../common/policy";


export default withRouter(function MainBottom(props) {
  const city = useRef(null);
  const date = useRef(null);
  const guests = useRef(null);

  const [visible, setVisible] = useState(false);
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
    if (city.current && date.current && guests.current) {
      props.history.push(
        `/search?query=${city.current}&date=${date.current}&guests=${
          guests.current
        }`
      );
    } else {
      message.error("전부 입력해주셔야합니다.");
    }
  };

  function range(start, end) {
    const result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

  function disabledDate(current) {
    // Can not select days before today and today

    return (
      current <
      moment()
        .endOf("day")
        .subtract(1, "days")
    );
  }

  function disabledDateTime() {
    const hour = moment().hour();
    const minute = moment().minute();
    const second = moment().second();

    return {
      disabledHours: () => range(0, 24).splice(0, hour),
      disabledMinutes: () => range(0, 60).splice(0, minute),
      disabledSeconds: () => range(0, 60).splice(0, second)
    };
  }

  return (
    <div id="Bottom-body">
      <h3
        className="Bottom-searchBar"
        style={{ fontWeight: "bold", textAlign: "left" }}
      >
        What are you looking for?
      </h3>

      <div className="Bottom-searchBar">
        <AutoInput onChange={_setCity} flag="main" />
      </div>

      <div className="Bottom-searchBar">
        <DatePicker
          onChange={_setDate}
          className="Bottom-searchBarUnit"
          size="large"

          format="YYYY-MM-DD HH:mm:ss"
          disabledDate={disabledDate}
          disabledTime={disabledDateTime}
          showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
        />
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
        <Button
          onClick={_onClick}
          className="Bottom-searchBarUnit"
          style={{ marginBottom: "50px" }}
          size="large"
        >
          Search
        </Button>
        <div
          className="Bottom-searchBarUnit"
          onClick={() => {
            setVisible(true);
          }}
          style={{ cursor: "pointer" }}
        >
          개인정보 처리 방침
        </div>
      </div>
      <Modal
        visible={visible}
        onCancel={() => {
          setVisible(false);
        }}
      >
        <Policy />
      </Modal>
    </div>
  );
});
