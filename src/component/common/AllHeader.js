import React, { useState } from "react";
import { Input } from "antd";
import TabButton from "./TabButton";
import "../../style/HostListHeader.css";

export default function HostListHeader() {
  const Search = Input.Search;
  const [modalVisible, setModalVisible] = useState(false);

  const _onClick = e => {
    console.log("여기");
    modalVisible ? setModalVisible(false) : setModalVisible(true);
  };

  return (
    <>
      <div id="HostList-header">
        <div id="HostList-logoBox" className="HostList-header-unit" span={6}>
          <div id="HostList-header-img" />
        </div>
        <div id="HostList-SearchBox" className="HostList-header-unit" span={12}>
          <div id="HostList-SearchSize">
            <Search
              id="HostList-SearchBar"
              placeholder="input search text"
              onSearch={value => console.log(value)}
              size="large"
            />
          </div>
        </div>
        <div id="HostList-tapBox" className="HostList-header-unit" span={6}>
          <TabButton onClick={_onClick} toggle={modalVisible} />
        </div>
      </div>
    </>
  );
}
