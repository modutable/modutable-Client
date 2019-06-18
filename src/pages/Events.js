import React, { useState, useEffect } from "react";
import "./Events.css";
import { Input, DatePicker, Select, Icon } from "antd";
import Header from "../component/common/header/Header";
import EventListEntry from "../component/events/EventListEntry";
import queryString from "query-string";
import Axios from "axios";

export default function Events({ location }) {
  const { date, guests, query } = queryString.parse(location.search);
  const URL = process.env.REACT_APP_URL;
  const InputGroup = Input.Group;

  const [data, setData] = useState([]);

  useEffect(() => {
    const _getData = async () => {
      const searchData = await Axios.get(
        `${URL}/events?opendate=${date}&guests=${guests}&address=${query}`
      );
      setData(searchData.data);
    };

    _getData();
  }, [URL, date, guests, query]);

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
