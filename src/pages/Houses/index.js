import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getHouses } from '../../store/houses/actions';
import Navbar1 from '../../components/Navbar';
import BannerHouses from '../../components/Houses/BannerHouses'
import HousesGeral from '../../components/Houses/HousesGeral';
import Loading from '../../components/Loading';
import Footer from '../../components/Footer';
import ErrorPage from '../../components/Error'
import BackTop from '../../components/BtnToTop';
import styled from 'styled-components';

const H1 = styled.h1`
    padding-top:3%;
    font-size: 10vh;
    font-weight: 800;
    color: black;
    font-family: 'Amatic SC', cursive;
    text-align: center;
`

const renderHouses = ({ name, mascot, headOfHouse, houseGhost, founder, school, values, values1, values2, colors, colors1 }, id) =>
  <HousesGeral key={id} id={id} name={name} mascot={mascot} headOfHouse={headOfHouse} houseGhost={houseGhost} founder={founder} school={school} values={values} values1={values1} values2={values2} colors={colors} colors1={colors1} />;


const Houses = () => {
  const dispatch = useDispatch();
  const isError = useSelector(state => state.houses.isError);
  const isLoading = useSelector(state => state.houses.isLoading);
  const houses = useSelector(state => {
    return state.houses.data
  });

  useEffect(() => {
    if (houses.length > 0) {
      return;
    }
    dispatch(getHouses());
  }, [dispatch]);

  if (isError) {
    return (
      <div>
        <ErrorPage />
      </div>
    )
  }

  return (
    <section>
      {!isLoading ? (
        <div>
          <Navbar1 />
          <BannerHouses />
          <section className="pb-5">
            <div className="container">
              <H1>Discover more about the four houses</H1>

              {houses.map(renderHouses)}

            </div>
          </section>
          <BackTop />
          <Footer />
        </div>
      ) : <Loading />}
    </section>
  )
}

export default Houses;