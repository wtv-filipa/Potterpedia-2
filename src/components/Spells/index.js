import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteSpell1 } from "../../store/spells/actions";
import { useAuth0 } from "@auth0/auth0-react";
import "../../styles/Spells.css";
import styled from "styled-components";

const Heading5 = styled.h5`
  font-family: "Amatic SC", cursive;
`;

const Paragraph = styled.p`
  font-family: "Roboto", sans-serif;
`;

const ListSpells = ({ id, spell, type, effect }) => {
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth0();

  const onDeleteSpell = () => {
    dispatch(deleteSpell1(id));
  };

  return (
    <div id="spells" key={id} className="col-4">
      <div className="card">
        <div className="card-body">
          <Heading5 className="card-title">{spell}</Heading5>
          <div className="card-text">
            <Paragraph>Type of spell: {type} </Paragraph>
            <Paragraph>Effect: {effect} </Paragraph>
          </div>
          {isAuthenticated ? (
            <>
              <i className="far fa-trash-alt pr-3" onClick={onDeleteSpell}></i>
              <Link key={id} to={`/update/${id}`}>
                <i className="far fa-edit" style={{ color: "black" }}></i>
              </Link>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ListSpells;
