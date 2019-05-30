import React, { useState } from "react";
import "../style/HostList.css";
import { Input, DatePicker, Select, Icon } from "antd";
import AllHeader from "../component/common/AllHeader";
import HostListEntry from "../component/HostList/HostListEntry";

export default function HostListView() {
  const [data, setData] = useState([
    {
      id: 1,
      phone: "01099720402",
      address: "대한민국 경기도 남양주시 도농동 209-12",
      guest_min: 1,
      guest_max: 4,
      openDate: "2019-05-29",
      closeDate: "2019-05-29",
      classification: "Dinner",
      title: "꽁밥 한끼",
      description: "즐겁게 함께 밥한끼하실 분",
      deadline: "6",
      user_id: 2,
      rate: 4
    },
    {
      id: 2,
      phone: "01099720402",
      address: "대한민국 경기도 남양주시 도농동 209-12",
      guest_min: 1,
      guest_max: 4,
      openDate: "2019-05-29",
      closeDate: "2019-05-29",
      classification: "Dinner",
      title: "즐거운밥 한끼",
      description: "즐겁게 함께 밥한끼하실 분",
      deadline: "6",
      user_id: 2,
      rate: 4.5
    }
  ]);

  const InputGroup = Input.Group;
  return (
    <div id="HostList-body">
      <AllHeader id="HostList-header" />

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
          return <HostListEntry key={hostData.id} data={hostData} />;
        })}
      </div>
      <div>Footer</div>
    </div>
  );
}
