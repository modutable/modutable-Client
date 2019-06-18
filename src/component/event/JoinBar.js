import React, { useState, useEffect, useMemo, useCallback } from "react";
import { connect } from "react-redux";

import { Checkbox, Button, message, Icon, Dropdown, Menu } from "antd";
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
  const { id, preparefoods, guestMax, guestMin, guests } = props;

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
  }, [guestScope]);

  const _postData = () => {
    Axios.post(
      `${URL}/events/book/${id}`,
      { foodNames, guests: joinGuests },
      {
        headers: { authorization: localStorage.getItem("token") }
      }
    ).then(({ data }) => {
      if (data.state === "join") {
        message.error("You are attending.");
      }
    });
  };

  const _foodSelectHandler = ({ target }) => {
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
  };

  const _buttonHandler = e => {
    if (localStorage.getItem("token")) {
      _postData();
    } else {
      message.error("Please, Log in!!");
    }
  };

  const _joinGuestHandler = useCallback(e => {
    setJoinGuests(e.key);
  }, []);

  const menu = (
    <Menu onClick={_joinGuestHandler}>
      {scope.map(ele => {
        return (
          <Menu.Item key={ele}>
            <Icon type="user" />
            {ele} guest
          </Menu.Item>
        );
      })}
    </Menu>
  );

  return (
    <div className="box JoinHostBar-container">
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
        <Dropdown
          className="JoinHostBar-select"
          overlay={menu}
          placement="topCenter"
          icon={<Icon type="user" />}
        >
          <Button>
            <Icon type="user" />
            Personnel
          </Button>
        </Dropdown>
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
// props 로 넣어줄 액션 생성함수

// 컴포넌트에 리덕스 스토어를 연동해줄 때에는 connect 함수 사용
export default connect(mapStateToProps)(JoinBar);
