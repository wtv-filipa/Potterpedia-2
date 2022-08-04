import React from 'react';
import styled from 'styled-components';
import '../../../styles/banner.css';

const BannerHome = styled.div`
    text-align: center;
    height: 100vh;
    Z-index: 5;

    .text {
        padding-top:25%;
        font-size: 10vh;
        font-weight: 800;
        text-shadow: 2px 2px black;
        color: white;
        font-family: 'Amatic SC', cursive;
    }

    .color{
        color:white;
    }
`
const Dark = styled.div`
    height: 100vh;
    opacity:0.7;
    background-color: #000000;
    z-index:10;
`


const Banner = () => {
    return (
        <Dark>
            <BannerHome className="bg" >
                <h1 className="text">WELCOME TO HOGWARTS</h1>
                <div className="arrow bounce">
                    <a className="fa fa-arrow-down fa-2x color" href="#cardsHome"></a>
                </div>
            </BannerHome>
        </Dark>
    );
}

export default Banner;