import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/general.css';
import '../../styles/characters_ind.css';
import styled from 'styled-components';

const H1 = styled.h1`
    font-size: 5vh;
    font-weight: 800;
    color: black;
    font-family: 'Amatic SC', cursive;
`

const P = styled.p`
    font-size: 20px !important;
    color: black !important;
    font-family: 'Roboto', sans-serif !important;
`
const H6 = styled.h6`
    font-size: 20px !important;
    color: black !important;
    font-family: 'Roboto', sans-serif !important;
`

const Li = styled.li`
    font-size: 20px !important;
    color: black !important;
    font-family: 'Roboto', sans-serif !important;
`

const ButtonBack = styled.button`
    -webkit-appearance: none;
       -moz-appearance: none;
            appearance: none;
    background-color: transparent;
    border: 2px solid black;
    border-radius: 0.6em;
    cursor: pointer;
    display: -webkit-box;
    display: flex;
    align-self: center;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    margin: 20px;
    padding: 5%;
    text-decoration: none !important;
    text-align: center;
    font-family:'Roboto', sans-serif !important;
    font-weight: 700;
    width: 75%;
    .link{
        text-decoration:none;
        color: black;
        text-align:center;
        display:block;
        margin:auto;
    }
`

const CharacterInd = ({ id, name, species, gender, house, dateOfBirth, ancestry, patronus, actor, alive, image, wand, wand1 }) => {
    return (
        <div key={id} className="container portfolio">
            <div className="row">
                <div className="col-md-12">
                    <div className="heading">
                        <Link to="/characters">
                            <img src="https://image.ibb.co/cbCMvA/logo.png" alt="icons" />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="bio-info">
                <div className="row">
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-md-12 my-auto">
                                <div className="bio-image ">
                                    <img src={image} alt="personagem" className="img-fluid" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="bio-content">
                            <H1>Hey there, I'm {name} !</H1>
                            <hr></hr>
                            <H6>As you know I'm a {ancestry} and The sorting hat decided that I belong to the {house} house. </H6>
                            <P>Species: {species}</P>
                            {alive === true ? (
                                <P>Status: alive </P>
                            ) : <P>Status: dead </P> 
                            }
                            <P>Gender: {gender}</P>
                            {patronus === "" ? (
                                <P>Patronus: unknown </P>
                            ) : <P>Patronus: {patronus} </P> 
                            }
                             {dateOfBirth === "" ? (
                                <P>Date of birth: unknown </P>
                            ) : <P>Date of birth: {dateOfBirth}</P> 
                            }
                            <P>Starring: {actor}</P>
                            <H6>Wand composition:</H6>
                            <ol>
                                {wand === "" ?(
                                    <Li>Core: unknown</Li>
                                ) : <Li>Core: {wand}</Li>
                                }
                                 {wand1 === "" ?(
                                    <Li>Wood: unknown</Li>
                                ) : <Li>Wood: {wand1}</Li>
                                }
                            </ol>
                        </div>

                    </div>
                    <div className="text-left">
                        <ButtonBack className="btn">
                            <Link className="link" to="/characters">
                                Go Back
                               </Link>
                        </ButtonBack>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharacterInd;