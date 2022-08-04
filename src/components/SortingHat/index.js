import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  background-color: #000; 
  height: 110vh; 
  padding: 0px; 
  margin: 0px; 
  width: 100%; 

`;

const Content = styled.div`
  h1 {
      color: #fff; 
      text-align: center; 
    }
  
  .sorting-hat {
    position: absolute;
    top: 40%;
    left: 50%;
    width: 500px;
    height: auto;
    margin-top: -250px; 
    margin-left: -250px; 
    text-align: center; 
  }
  
  .sorting-hat img {
    height: auto; 
    width: 100%; 
  }
  
  .sorting-hat p {
    color: #fff; 
    text-align: center; 
  }

  #message{
    font-family: 'Roboto', sans-serif;
    font-size: 30px;
  }
  
`
const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  flex: 1 1 auto;
  margin: 10px;
  padding: 6px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: black !important;
  box-shadow: 0 0 10px #2f2f2f;
  border-radius: 20px;
  width: 80%;
`;

const Heading1 = styled.h1`
  font-size: 60px !important;
  font-family: 'Amatic SC', cursive;
`

const SortingHat = () => {
  var houses = [
    {
      id: "gryffindor",
      color: "rgba(116, 0, 1, 0.7)",
      message: "Congrats, you're a Gryffindor!"
    },
    {
      id: "hufflepuff",
      color: "rgba(255, 219, 0, 0.5)",
      message: "Congrats, you're a Hufflepuff!"
    },
    {
      id: "ravenclaw",
      color: "rgba(14, 26, 64, 0.7)",
      message: "Congrats, you're a Ravenclaw!"
    },
    {
      id: "slytherin",
      color: "rgba(26, 71, 42, 0.7)",
      message: "Congrats, you're a Slytherin!"
    },
  ];

  const newHouse = () => {
    var selection = houses[Math.floor(Math.random() * houses.length)];
    document.getElementById("message").innerHTML = selection.message;
    document.getElementById("color").style.backgroundColor = selection.color;
  }
  return (
    <Background id="color">
      <Content>
        <section className="sorting-hat mb-5">
          <Heading1 className="pb-5">Harry Potter Sorting Hat</Heading1>
          <img id="hat" src="https://cdn2.hubspot.net/hubfs/678613/Projects/CodePen/Harry%20Potter%20Sorting%20Hat/Sorting%20Hat.png" alt="Sorting Hat" />
          <p className="pt-5" id="message"></p>
          <Button id="sortButton" onClick={newHouse}>Click to Get Sorted Into Your House</Button>
        </section>
      </Content>
    </Background>
  )
}

export default SortingHat;