import React, { Component } from "react";
import { Select } from "antd";
export default class BirthdayInput extends Component {
  onChange = value => {
    this.props.selectDate(this.props.kind, value);
  };

  render() {
    const { Option } = Select;
    const optionValues = [];
    var start = 1,
      end = 31;
    if (this.props.kind === "Year") {
      start = 1901;
      end = new Date().getFullYear();
    } else if (this.props.kind === "Month") {
      start = 1;
      end = 12;
    }
    for (var i = start; i <= end; i++) optionValues.push(i);
    if (this.props.kind === "Year") optionValues.reverse();
    return (
      <div>
        <Select
          showSearch
          style={{ width: "100%", padding: "0 8px" }}
          placeholder={this.props.kind}
          optionFilterProp="children"
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          onSearch={this.onSearch}
        >
          {optionValues.map(data => (
            <Option value={data} key={data}>
              {data}
            </Option>
          ))}
        </Select>
      </div>
    );
  }
}
