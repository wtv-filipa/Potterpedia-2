import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  getFavorite,
  createFav,
  deleteFav,
} from "../../store/favorites/actions";
import "../../styles/general.css";
import "../../styles/characters.css";
import styled from "styled-components";
import hogwarts from "../../imgs/hogwarts.jpg";

const Div = styled.div`
  text-align: right;
  margin-top: -17px;
  color: #890000;
`;

const Character = ({ id, name, house, image, actor }) => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();
  const token = useSelector(({ token }) => token);
  const isFavorite = useSelector(
    ({ favCharacter }) =>
      user &&
      Boolean(
        favCharacter.data.find(
          (fav) => fav.userId === user.sub && fav.nameCharacter === name
        )
      )
  );

  useEffect(() => {
    if (!token) {
      return;
    }
    dispatch(getFavorite(name));
  }, [dispatch, token]);

  const DoFav = () => {
    dispatch(createFav(name));
    console.log(name);
  };

  const DeleteFav = () => {
    dispatch(deleteFav(name));
    console.log("delete", name);
  };

  return (
    <div id="characters" className="col-lg-4 col-md-6 mt-5">
      <div className="card bgBlack">
        <div className="card-body">
          <span className="round-image">
            <img src={image} alt="character" />
          </span>
          {isAuthenticated ? (
            <Div>
              {isFavorite ? (
                <>
                  <i
                    class="fas fa-heart"
                    onClick={DeleteFav}
                    styles={{ cursor: "pointer" }}
                  ></i>
                </>
              ) : (
                <>
                  <i
                    class="far fa-heart"
                    onClick={DoFav}
                    styles={{ cursor: "pointer" }}
                  ></i>
                </>
              )}
            </Div>
          ) : null}
          <h4 className="card-title">{name}</h4>
          <p className="card-text">
            The character {name} is played by {actor}.
          </p>
          <p className="card-text">House: {house}</p>
          <Link
            key={id}
            to={`/characters/${id}`}
            className="btn btn-default text-uppercase"
            style={{color:"white"}}
          >
            More details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Character;
