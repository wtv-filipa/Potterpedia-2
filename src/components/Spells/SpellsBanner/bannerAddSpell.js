import React from 'react';
import "../../../styles/Spells.css";
import styled from 'styled-components';

const Starsbg = styled.div`
    text-align: center;
    background: #000;
    color: #fff;
    font-family: sans-serif;
    height: 50vh;

    .titleSpell{
        padding-top:15%;
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


const BannerAddSpell = ({titulo = ''}) => {
    return (
        <Starsbg>
            <div className="starfield">
                <div className="static"></div>
                <div className="moving-1"></div>
                <div className="moving-2"></div>
                <div className="moving-3"></div>
            </div>
            <h1 className="titleSpell">{titulo}</h1>
        </Starsbg>
    )
}

export default BannerAddSpell;