import React from "react";
import { Input, Select, Icon } from "antd";

export default function Experience(props) {
  const { Option } = Select;
  const { TextArea } = Input;
  const {
    changeExperience,
    changeMinGuest,
    changeMaxGuest,
    changeTitle,
    changeIntro
  } = props.change;

  const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const _titleHandler = ({ target }) => {
    changeTitle(target.value);
  };
  const _introHandler = ({ target }) => {
    changeIntro(target.value);
  };

  return (
    <div className="container">
      <h1>Your Experience</h1>
      <h3>
        Hi there! This is where you share all the delicious details of the Eatwith moment you offer.{" "}
      </h3>
      <p />
      <div className="box" style={{ width: "100%" }}>
        <div style={{ textAlign: "center", width: "100%" }}>
          <h3 style={{ fontWeight: "bold" }}>Experience</h3>
          <Select
            id="max"
            defaultValue="Select..."
            style={{ textAlign: "center", width: "80%" }}
            onChange={changeExperience}
          >
            <Option value="Breakfast">Breakfast</Option>
          </Select>
        </div>

        <div style={{ textAlign: "center", width: "100%" }}>
          <h3 style={{ fontWeight: "bold" }}>Min Guest</h3>
          <Select
            id="min"
            defaultValue="Select..."
            style={{ textAlign: "center", width: "80%" }}
            onChange={changeMinGuest}
          >
            {numArray.map((ele, i) => (
              <Option value={ele} key={i}>
                <Icon type="user" /> {ele} Guest
              </Option>
            ))}
          </Select>
        </div>

        <div style={{ textAlign: "center", width: "100%" }}>
          <h3 style={{ fontWeight: "bold" }}>Max Guest</h3>
          <Select
            id="max"
            defaultValue="Select..."
            style={{ textAlign: "center", width: "80%" }}
            onChange={changeMaxGuest}
          >
            {numArray.map((ele, i) => (
              <Option value={ele} key={i}>
                <Icon type="user" /> {ele} Guest
              </Option>
            ))}
          </Select>
        </div>
      </div>

      <p />
      <div style={{ width: "100%" }}>
        <h3 style={{ fontWeight: "bold" }}>Title</h3>
        <Input
          style={{ width: "100%" }}
          defaultValue="aaa"
          type="text"
          placeholder=""
          onChange={_titleHandler}
        />
      </div>
      <p />

      <div>
        <h3 style={{ fontWeight: "bold" }}>Tell us about yourself and your experience</h3>
        <TextArea rows={4} onChange={_introHandler} />
      </div>
    </div>
  );
}
