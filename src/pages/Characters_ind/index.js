import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Navbar1 from '../../components/Navbar';
import Loading from '../../components/Loading';
import CharacterInd from '../../components/Characters_ind';
import ErrorPage from '../../components/Error'
import { getCharaters } from '../../store/characters/actions';


const renderCharacter = ({ id, name, species, gender, house, dateOfBirth, ancestry, patronus, stag, actor, alive, image, wand, wand1 }) =>
  <CharacterInd key={id} id={id} name={name} species={species} gender={gender} house={house} dateOfBirth={dateOfBirth} ancestry={ancestry} patronus={patronus} stag={stag} actor={actor} alive={alive} image={image} wand={wand.core} wand1={wand.wood} />;


const Personagem = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const isError = useSelector(state => state.characters.isError);
  const isLoading = useSelector(state => state.characters.isLoading);
  const character = useSelector(state => {
    return state.characters.data[id];
  });

  useEffect(() => {
    if (character) {
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

  return (
    <section>
      {!isLoading && character ? (
        <div>
          <Navbar1 />
          <section className="pb-5">
            <div className="row">
              {renderCharacter(character)}
            </div>
          </section>
        </div>
      ) : <Loading />}
    </section>
  )
}

export default Personagem;