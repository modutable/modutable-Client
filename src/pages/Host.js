import React, { useState, useEffect } from "react";
import Header from "../component/common/Header";
import { Slide, Experience, NavBar, Place, Reviews } from "../component/Host";
import "./Host.css";
import Axios from "axios";
import JoinHostBar from "../component/Host/JoinHostBar";

export default function Host({ match }) {
  const hostId = match.params.id;
  const [data, setData] = useState({
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
  });

  useEffect(() => {
    // Axios;
  }, []);

  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <Header />

      <Slide />

      <h1 id="Host-name">title</h1>
      <NavBar />
      <div style={{ padding: "2% 5%" }}>
        <Experience />
        <Reviews />
        <Place />
        <JoinHostBar />
      </div>
    </>
  );
}
