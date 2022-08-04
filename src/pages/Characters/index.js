import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharaters } from '../../store/characters/actions';
import Navbar1 from '../../components/Navbar';
import BannerCharacter from '../../components/Characters/BannerCharacters';
import Loading from '../../components/Loading';
import Character from '../../components/Characters';
import Footer from '../../components/Footer';
import ErrorPage from '../../components/Error'
import BackTop from '../../components/BtnToTop';
import '../../styles/characters.css';
import styled from 'styled-components';

const Input = styled.input`
  border-radius: 40px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  border:none;
  outline: none;
  width: 30%;
`;

const renderCharacters = ({ name, house, image, actor }, id) =>
  <Character key={id} id={id} name={name} house={house} image={image} actor={actor} />;


const Personagens = () => {
  const [order, setOrder] = useState('asc');
  const [searchTerm, setSearchTerm] = useState(null);
  const searchRef = useRef(null);
  const dispatch = useDispatch();
  const isError = useSelector(state => state.characters.isError);
  const isLoading = useSelector(state => state.characters.isLoading);
  const characters = useSelector(state => {
    return state.characters.data
  });

  useEffect(() => {
    if (characters.length > 0) {
      return;
    }
    dispatch(getCharaters());
  }, [dispatch]);

  if (isError) {
    return (
      <div>
        <ErrorPage />
      </div>
    )
  }

  const buttonAsc = () => {
    setOrder('asc');
  }
  const buttonDesc = () => {
    setOrder('desc');
  }

  let orderedPerso;

  if (order === 'asc') {
    orderedPerso = [...characters].sort((a, z) => {
      if (a.name > z.name) {
        return 1;
      }
      if (z.name < a.name) {
        return -1;
      }
      return 0;
    });
  } else {
    orderedPerso = [...characters].sort((a, z) => {
      if (a.name > z.name) {
        return -1;
      }
      if (z.name < a.name) {
        return 1;
      }
      return 0;
    });
  }

  const onSearch = (e) => {
    setSearchTerm(e.currentTarget.value);
  }

  const filteredCharacters = searchTerm ? orderedPerso.filter(char => {
    return char.name.toLowerCase().indexOf(searchTerm) !== -1;
  }) : orderedPerso;

  return (
    <section>
      {!isLoading ? (
        <div>
          <Navbar1 />
          <BannerCharacter />
          <section className="pb-5">
            <div className="container pt-5">
              <div className="text-right">
                <Input className="mr-3" type="text" ref={searchRef} onKeyUp={onSearch} placeholder="Search for a character..." />
                <i onClick={buttonAsc} className="fas fa-sort-alpha-up fa-lg pr-3" style={{ color: "black", cursor: "pointer" }}></i>
                <i onClick={buttonDesc} className="fas fa-sort-alpha-down-alt fa-lg" style={{ color: "black", cursor: "pointer" }}></i>
              </div>
              <div className="row">
                {filteredCharacters.map(renderCharacters)}
              </div>
            </div>
          </section>
          <BackTop />
          <Footer />
        </div>
      ) : <Loading />}
    </section>
  )
}

export default Personagens;