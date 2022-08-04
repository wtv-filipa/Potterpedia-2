import React from 'react';
import styled from 'styled-components';
import '../../../styles/banner.css';

const BannerHome = styled.div`
    text-align: center;
    height: 100vh;
    width:auto;
    Z-index: 5;
    background-position: center;
    background-repeat: no-repeat; 

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


const BannerHouses = () => {
    return (
        <Dark>
            <BannerHome className="bgHouses" >
            </BannerHome>
        </Dark>
    );
}

export default BannerHouses;