import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Rate } from "antd";

const URL = process.env.REACT_APP_URL;

export default function ByReview(props) {
  const { id } = props;
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const _getData = async () => {
      const { data } = await Axios.get(`${URL}/events/userreviews/${id}`);

      setReviews(data);
    };

    _getData();
  }, [id, setReviews]);

  return (
    <div className="Reviews">
      <h3 style={{ fontWeight: "bold" }}> Reviews </h3>
      {reviews.map((ele, i) => (
        <div className="review_Box" key={"by" + i}>
          <div className="review_pictureBox review_flex">
            <div className="review_margin">
              <img className="review_img" src={ele.user.profileImg} alt="profile" />
            </div>
          </div>
          <div className="review_contentBox review_flex">
            <div className="review_margin" style={{ textAlign: "center" }}>
              <div>
                {ele.user.firstName} {ele.user.lastName}
              </div>
              <Rate disabled allowHalf defaultValue={ele.score} />
              <div>{ele.review_date.slice(0, 10)}</div>
            </div>
          </div>
          <div className="review_textBox review_flex">
            <div className="review_margin">{ele.review_contents}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
