import React from "react";
import { Input, Button, DatePicker, Select, Icon } from "antd";
import "../../style/MainBottom.css";

export default function MainBottom() {
  const Search = Input.Search;
  const InputGroup = Input.Group;
  // const { Option } = Select;

  return (
    <div id="Bottom-body">
      <h3 className="Bottom-searchBar" style={{ fontWeight: "bold", textAlign: "left" }}>
        What are you looking for?
      </h3>

      <div className="Bottom-searchBar">
        <Search
          className="Bottom-searchBarUnit"
          placeholder="input search text"
          onSearch={value => console.log(value)}
          size="large"
        />
      </div>

      <div className="Bottom-searchBar">
        <DatePicker className="Bottom-searchBarUnit" size="large" />
      </div>

      <div className="Bottom-searchBar">
        <InputGroup className="Bottom-searchBarUnit">
          <Select
            className="Bottom-searchBarUnit"
            size="large"
            icon={<Icon type="user" />}
            defaultValue="Guests"
          />
          {/* <Option /> */}
        </InputGroup>
      </div>

      <div className="Bottom-searchBar">
        <Button className="Bottom-searchBarUnit" size="large">
          Search
        </Button>
      </div>
    </div>
  );
}
