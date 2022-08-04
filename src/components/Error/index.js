import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import '../../styles/banner.css';

const BannerHome = styled.div`
    text-align: center;
    height: 100vh;
    width:auto;
    Z-index: 5;
    background-position: center;
    background-repeat: no-repeat; 

.text {
    padding-top:25%;
    font-size: 10vh;
    font-weight: 800;
    text-shadow: 2px 2px black;
    color: white;
    font-family: 'Amatic SC', cursive;
}

.textLink{
    color:white;
    font-size: 20px;
    text-decoration:none;
    font-family: 'Roboto', sans-serif;
}

`
const Dark = styled.div`
    height: 100vh;
    opacity:0.7;
    background-color: #000000;
    z-index:10;
`
const ErrorPage = () => {
    return (
        <Dark>
            <BannerHome className="bgError" >
                <h1 className="text">Unexpected Error!</h1>
                <Link className="textLink" to="/" >Return Home</Link>
            </BannerHome>
        </Dark>
    )
}

export default ErrorPage;