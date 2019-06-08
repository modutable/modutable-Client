import React, { useState, useEffect } from "react";
import "./Events.css";
import { Input, DatePicker, Select, Icon } from "antd";
import Header from "../component/common/header/Header";
import EventListEntry from "../component/Events/EventListEntry";
import queryString from "query-string";
import Axios from "axios";

export default function Events({ location }) {
  const values = queryString.parse(location.search);
  const URL = process.env.REACT_APP_URL;

  console.log(URL);

  const [query, setQuery] = useState("");
  const [date, setDate] = useState({});
  const [guests, setGuests] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const _getData = async () => {
      const { data } = await Axios.get(URL + "/events");
      console.log(data);
      setData(data);
    };
    _getData();
  }, [URL]);

  const InputGroup = Input.Group;
  return (
    <>
      <Header id="HostList-header" />

      <InputGroup compact>
        <DatePicker style={{ width: "50%", color: "black" }} size="large" />
        <Select
          style={{ width: "50%" }}
          size="large"
          icon={<Icon type="user" />}
          defaultValue="Guests"
        />
        {/* <Option /> */}
      </InputGroup>

      <div id="HostList-contents">
        <h2 style={{ color: "black", marginBottom: "5%" }}>Events available by request</h2>
        {data.map(hostData => {
          return <EventListEntry key={hostData.id} data={hostData} />;
        })}
      </div>
      <div>Footer</div>
    </>
  );
}
