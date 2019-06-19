import React, { useState, useEffect, useMemo, useCallback } from "react";
import { connect } from "react-redux";

import { changeGuests, changeFoods } from "../../store/modules/viewEvent";
import { Checkbox, Button, message, Icon, Select } from "antd";
import "./JoinBar.css";
import Axios from "axios";
const URL = process.env.REACT_APP_URL;

const getGuestScope = (max, min, join) => {
  let scopeArr = [];

  for (let i = min; i <= max - join; i++) {
    scopeArr = scopeArr.concat(i);
  }
  return Boolean(scopeArr[0]) ? scopeArr : [];
};

function JoinBar(props) {
  const { Option } = Select;
  const { id, guestMax, guestMin, guests, preparefoods, changeGuests, changeFoods } = props;
  const [foodNames, setFoodNames] = useState([]);
  const [joinGuests, setJoinGuests] = useState(null);
  const [scope, setScope] = useState([]);

  const guestScope = useMemo(() => getGuestScope(guestMax, guestMin, guests), [
    guestMax,
    guestMin,
    guests
  ]);

  useEffect(() => {
    setScope(guestScope);
  }, [guestScope, props.preparefoods]);

  const _postData = useCallback(() => {
    Axios.post(
      `${URL}/events/book/${id}`,
      { foodNames, guests: joinGuests },
      {
        headers: { authorization: localStorage.getItem("token") }
      }
    ).then(({ data }) => {
      if (data.state === "join") {
        message.error("You are attending.");
      } else {
        message.success("Join Success");
        changeFoods(data.data);
        changeGuests(data.guests);
      }
    });
  }, [changeFoods, changeGuests, foodNames, id, joinGuests]);

  const _foodSelectHandler = useCallback(
    ({ target }) => {
      if (target.checked) {
        if (!foodNames.includes(target.value)) {
          setFoodNames(foodNames.concat(target.value));
        }
      } else {
        let index = foodNames.indexOf(target.value);
        let changeFoods = foodNames.slice();
        changeFoods.splice(index, 1);
        setFoodNames(changeFoods);
      }
    },
    [foodNames]
  );

  const _buttonHandler = e => {
    if (localStorage.getItem("token")) {
      if (foodNames.length > 0 && joinGuests) {
        _postData();
      } else {
        message.error("Please select food and number of people");
      }
    } else {
      message.error("Please, Log in!!");
    }
  };

  const _joinGuestHandler = useCallback(e => {
    setJoinGuests(e);
  }, []);

  return (
    <div className="box JoinHostBar-container">
      {console.log("rander", preparefoods, scope)}

      <div id="JoinHostBar-check">
        <div style={{ width: "80%", margin: "auto" }}>
          {preparefoods.map((food, i) => {
            return (
              <Checkbox
                className="JoinHostBar-checkBox"
                disabled={Boolean(food.state)}
                value={food.name}
                onChange={_foodSelectHandler}
                key={i}
              >
                {food.name}{" "}
              </Checkbox>
            );
          })}
        </div>
      </div>
      <div className="JoinHostBar-selectBox">
        <Select
          className="JoinHostBar-select"
          placeholder={
            <>
              <Icon type="user" /> Guests
            </>
          }
          onSelect={_joinGuestHandler}
        >
          {scope.map(ele => {
            return (
              <Option key={ele}>
                <Icon type="user" /> {ele} Guest
              </Option>
            );
          })}
        </Select>
      </div>
      <div id="JoinHostBar-buttonBox">
        <Button id="JoinHostBar-button" onClick={_buttonHandler}>
          Join
        </Button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ viewEvent }) => ({
  id: viewEvent.id,
  preparefoods: viewEvent.preparefoods,
  guestMax: viewEvent.guestMax,
  guestMin: viewEvent.guestMin,
  guests: viewEvent.guests
});
const mapDispatchToProps = dispatch => ({
  changeGuests: guests => dispatch(changeGuests(guests)),
  changeFoods: foods => dispatch(changeFoods(foods))
});

// props 로 넣어줄 액션 생성함수

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(JoinBar);
