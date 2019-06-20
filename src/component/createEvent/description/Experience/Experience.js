import React from "react";
import { connect } from "react-redux";
import { Input, Select, Icon } from "antd";
import { debounce } from "lodash";
import {
  changeExperience,
  changeMinGuest,
  changeMaxGuest,
  changeTitle,
  changeIntro,
  changeMealsType,
  changeFoods
} from "../../../../store/modules/createDescription";

function Experience(props) {
  const { Option } = Select;
  const { TextArea } = Input;
  const {
    changeExperience,
    changeMinGuest,
    changeMaxGuest,
    changeTitle,
    changeIntro,
    changeMealsType,
    changeFoods
  } = props;

  const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const _titleHandler = () => {
    changeTitle(document.querySelector("#title").value);
  };
  const _introHandler = () => {
    changeIntro(document.querySelector("#intro").value);
  };
  const _EXHandler = () => {
    changeExperience(document.querySelector("#ex").value);
  };
  const _foodHandler = () => {
    let foods = document.querySelector("#food").value;
    foods = foods.split(",");
    changeFoods(foods);
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
            defaultValue="Select..."
            style={{ textAlign: "center", width: "80%" }}
            onChange={changeMealsType}
          >
            <Option value="Breakfast">Breakfast</Option>
            <Option value="Lunch">Lunch</Option>
            <Option value="Dinner">Dinner</Option>
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
          id="title"
          style={{ width: "100%" }}
          type="text"
          placeholder="ex: Let's have a good lunch."
          onChange={debounce(_titleHandler, 500)}
        />
      </div>
      <p />

      <div>
        <h3 style={{ fontWeight: "bold" }}>Tell us about yourself</h3>
        <TextArea id="intro" rows={4} onChange={debounce(_introHandler, 500)} />
      </div>
      <p />
      <div>
        <h3 style={{ fontWeight: "bold" }}>Tell us about your experience</h3>
        <TextArea id="ex" rows={4} onChange={debounce(_EXHandler, 500)} />
      </div>
      <p />
      <div>
        <h3 style={{ fontWeight: "bold" }}>
          Fill the materials that you want to prepared by them (if you want to list multiple things,
          write them in comma)
        </h3>
        <Input
          id="food"
          type="text"
          placeholder="ex1 , ex2, ex3, etc"
          onChange={debounce(_foodHandler, 500)}
        />
      </div>
      <p />
    </div>
  );
}
const mapStateToProps = () => ({});
// props 로 넣어줄 액션 생성함수
const mapDispatchToProps = dispatch => ({
  // changeNumber: number => dispatch(changeNumber(number))
  changeExperience: experience => dispatch(changeExperience(experience)),
  changeMinGuest: minGuest => dispatch(changeMinGuest(minGuest)),
  changeMaxGuest: maxGuest => dispatch(changeMaxGuest(maxGuest)),
  changeTitle: title => dispatch(changeTitle(title)),
  changeIntro: intro => dispatch(changeIntro(intro)),
  changeMealsType: mealsType => dispatch(changeMealsType(mealsType)),
  changeFoods: foods => dispatch(changeFoods(foods))
});

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Experience);
