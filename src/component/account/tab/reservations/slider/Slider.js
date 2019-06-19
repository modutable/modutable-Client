import React, { useEffect, useState, useCallback } from "react";
import "./Slider.css";
import { Button, Pagination, Modal } from "antd";
import Axios from "axios";
import Review from "../../../../common/Review";

const URL = process.env.REACT_APP_URL;

const _dataHandler = data => {
  let newData = [];
  for (let i = 0; i < data.length; i = i + 5) {
    newData.push(data.slice(i, i + 5));
  }
  console.log("Data", newData);
  return newData;
};

const _fickColor = () => {
  const colors = ["#EBD850", "#84B544", "#CBB192", "#9FD1DF", "#C73479", "#E46136"];
  const random_color = colors[Math.floor(Math.random() * colors.length)];
  return random_color;
};

export default function Slider(props) {
  const { data, userId, change } = props;
  const [newData, setNewData] = useState([]);
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(false);

  const getData = useCallback(() => {
    setNewData(_dataHandler(data));
  }, [data]);

  useEffect(() => {
    getData();
  }, [data, getData]);

  const _onClickHandler = useCallback(
    (flag, id, eventId) => {
      if (flag !== "delete") {
        Axios.post(
          flag === "confirm" ? `${URL}/events/confirm` : `${URL}/events/cancle`,
          { id, eventId },
          { headers: { authorization: localStorage.getItem("token") } }
        ).then(res => {
          console.log("여기", res.data);
          change(res.data);
        });
      } else {
        Axios.delete(
          `${URL}/events/myrequest`,
          { id, eventId },
          { headers: { authorization: localStorage.getItem("token") } }
        ).then(res => {
          change(res.data);
        });
      }
    },
    [change]
  );

  const onChange = useCallback(page => {
    setCurrent(page);
  }, []);

  return (
    <div className="slider_container">
      {newData.map((contents, i) => {
        return (
          <div
            style={{ display: current === i ? "flex" : "none" }}
            className="dragscroll slider_contentBox"
            key={contents[0].id + contents[0].score}
          >
            {contents.map((content, i) => {
              return (
                <div className="slider_content " key={content.id + i}>
                  <div className="slider_content_title">{content.event.title}</div>
                  <div className="slider_content_date">{content.event.openDate.slice(0, 10)}</div>
                  <div className="slider_content_from">
                    To : {content.user.firstName + " " + content.user.lastName}
                  </div>
                  <div className="slider_content_mealsType">{content.event.mealsType}</div>
                  <div className="slider_content_foods">
                    {content.user.preparefoods.map(food => (
                      <div
                        key={food.name + food.id}
                        className="slider_content_food"
                        style={{ backgroundColor: _fickColor() }}
                      >
                        {food.name}
                      </div>
                    ))}
                  </div>
                  <div className="slider_content_buttonBox">
                    <div style={{ margin: "auto", display: "flex" }}>
                      <Button
                        id="confirm"
                        style={{
                          display:
                            content.state === "pending" &&
                            content.userId !== userId &&
                            new Date(content.event.openDate) < new Date()
                              ? "block"
                              : "none"
                        }}
                        onClick={e => {
                          _onClickHandler(e.target.id, content.userId, content.eventId);
                        }}
                      >
                        confirm
                      </Button>
                      <Button
                        id="review"
                        style={{
                          display:
                            content.state === "confirm"
                              ? content.event.userId === userId
                                ? "none"
                                : "block"
                              : "none"
                        }}
                        onClick={() => {
                          setVisible(true);
                        }}
                      >
                        review
                      </Button>

                      <Button
                        id="cancle"
                        onClick={e => {
                          _onClickHandler(e.target.id, content.userId, content.eventId);
                        }}
                        style={{
                          display: content.state === "cancle" ? "none" : "block"
                        }}
                      >
                        cancle
                      </Button>
                    </div>
                  </div>
                  <Button
                    id="delete"
                    onClick={e => {
                      _onClickHandler(e.target.id, content.userId, content.eventId);
                    }}
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      border: "0px"
                    }}
                  >
                    X
                  </Button>
                  <Modal
                    visible={visible}
                    onOk={() => {
                      console.log(11);
                    }}
                    onCancel={() => {
                      setVisible(false);
                    }}
                    footer={false}
                  >
                    <Review eventId={content.eventId} onClose={setVisible} />
                  </Modal>
                </div>
              );
            })}
          </div>
        );
      })}

      <Pagination
        current={current}
        onChange={onChange}
        total={newData.length * 5}
        style={{ display: newData.length <= 5 ? "none" : "block" }}
      />
    </div>
  );
}
