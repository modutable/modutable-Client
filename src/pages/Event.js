import React, { useState, useEffect } from "react";
import Header from "../component/common/header/Header";
import { Slide, Experience, NavBar, Place, Reviews } from "../component/Host";
import "./Event.css";
import Axios from "axios";
import JoinHostBar from "../component/Host/JoinHostBar";

export default function Event({ match }) {
  const hostId = match.params.id;
  const [data, setData] = useState({});

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
