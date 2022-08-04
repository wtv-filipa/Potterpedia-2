import React from "react";
import styled from "styled-components";
import "../../../styles/banner.css";

const Banner = styled.div`
  text-align: center;
  height: 100vh;
  z-index: 5;

  .text {
    padding-top: 25%;
    font-size: 10vh;
    font-weight: 800;
    text-shadow: 2px 2px black;
    color: white;
    font-family: "Amatic SC", cursive;
  }

  .color {
    color: white;
  }
`;
const Dark = styled.div`
  height: 100vh;
  opacity: 0.9;
  background-color: #000000;
  z-index: 10;
`;

const BannerForum = () => {
  return (
    <Dark>
      <Banner className="bgForum">
        <h1 className="text">HOGWARTS COMMUNITY</h1>
        <div className="arrow bounce">
          <a className="fa fa-arrow-down fa-2x color" href="#cardsHome"></a>
        </div>
      </Banner>
    </Dark>
  );
};

export default BannerForum;
