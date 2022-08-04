import React from 'react';
import '../../styles/general.css';
import '../../styles/houses.css';
import styled from 'styled-components';

const H3 = styled.h3`
  font-size: 60px;
  font-family: 'Amatic SC', cursive;
`
const P = styled.p`
  font-family: 'Roboto', sans-serif;
`


const HousesGeral = ({ id, name, mascot, headOfHouse, houseGhost, founder, school, values, values1, values2, colors, colors1 }) => {
  return (
    <section id="houses">

      <div id={"id_" + id} className="blog-card1">
        <a href="#fakeLink">
          <div className="content-mask">
            <H3>{name}</H3>
            <P className="blogtext">{name} is one of the four Houses of {school} and was founded by {founder}. {name} instructed the Sorting Hat to choose students possessing characteristics he most valued, such as {values}, {values1}, and {values2} to be sorted into his house. The emblematic animal is a {mascot}, and its colours are {colors} and {colors1}. The house ghost is {houseGhost} and the actual head of the house is {headOfHouse} </P>
          </div>
          <div className="horizontal"></div>
        </a>
      </div>


    </section>

  )
}

export default HousesGeral;