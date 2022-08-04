import React from 'react';
import styled from 'styled-components';
import img404 from '../../imgs/404.jpg'

const Error = styled.div`
    background: #1a1f25;
    height:100vh;
    
    h1{
    color:white;   
    font-family: 'Amatic SC', cursive;
    font-size:80px; 
    font-weight:800;
    }
`
const Img = styled.img`
    display:block;
    margin:auto;
    padding-top: 10%
`
const Texto = styled.p`
    display:block;
    margin:auto;
    text-align:center;
    color:white;
    font-family: 'Roboto', sans-serif;
    font-size:20px;
`

const Error404 = () => {
    return (
        <Error>
            <Img src={img404} />
            <h1 className="text-center">Error 404</h1>
            <Texto>Oops someting went wrong! Please Try again!</Texto>
        </Error >
    )
}

export default Error404;