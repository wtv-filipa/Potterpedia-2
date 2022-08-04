import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSpells } from "../../store/spells/actions";
import Navbar1 from "../../components/Navbar";
import BannerSpells from "../../components/Spells/SpellsBanner";
import ListSpells from "../../components/Spells";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import ErrorPage from "../../components/Error";
import BackTop from "../../components/BtnToTop";
import Messages from "../../components/Messages";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Container = styled.div`
  background: black;
`;

const Input = styled.input`
  border-radius: 40px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  border: none;
  outline: none;
  width: 30%;
`;

const renderSpells = ({ id, spell, type, effect }) => (
  <ListSpells key={id} id={id} spell={spell} type={type} effect={effect} />
);

const Spells = () => {
  const [order, setOrder] = useState("asc");
  const [searchTerm, setSearchTerm] = useState(null);
  const searchRef = useRef(null);
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.spells.isError);
  const isLoading = useSelector((state) => state.spells.isLoading);
  const isDeletedError = useSelector((state) => state.spells.isDeletedError);
  const { isAuthenticated } = useAuth0();
  const spells = useSelector((state) => {
    return state.spells.data;
  });

  useEffect(() => {
    if (spells.length > 0) {
      return;
    }
    dispatch(getSpells());
  }, [dispatch]);

  if (isError) {
    return (
      <div>
        <ErrorPage />
      </div>
    );
  }

  const buttonAsc = () => {
    setOrder("asc");
  };
  const buttonDesc = () => {
    setOrder("desc");
  };

  let orderedSpells;

  if (order === "asc") {
    orderedSpells = [...spells].sort((a, z) => {
      if (a.spell > z.spell) {
        return 1;
      }
      if (z.spell < a.spell) {
        return -1;
      }
      return 0;
    });
  } else {
    orderedSpells = [...spells].sort((a, z) => {
      if (a.spell > z.spell) {
        return -1;
      }
      if (z.spell < a.spell) {
        return 1;
      }
      return 0;
    });
  }

  const onSearch = (e) => {
    setSearchTerm(e.currentTarget.value);
  };

  const filteredSpells = searchTerm
    ? orderedSpells.filter((spell) => {
        return spell.spell.toLowerCase().indexOf(searchTerm) !== -1;
      })
    : orderedSpells;

  return (
    <section>
      {!isLoading ? (
        <div>
          <Navbar1 />
          <BannerSpells />
          <Container>
            <div className="container">
              <div className="text-right">
                <Input
                  className="mr-3"
                  type="text"
                  ref={searchRef}
                  onKeyUp={onSearch}
                  placeholder="Search for a spell..."
                />
                <i
                  onClick={buttonAsc}
                  className="fas fa-sort-alpha-up fa-lg pr-3"
                  style={{ color: "white", cursor: "pointer" }}
                ></i>
                <i
                  onClick={buttonDesc}
                  className="fas fa-sort-alpha-down-alt fa-lg pr-3"
                  style={{ color: "white", cursor: "pointer" }}
                ></i>
                {isAuthenticated ? (
                  <Link to="/addspell">
                    <i
                      className="fas fa-plus-circle fa-lg"
                      style={{ color: "white", cursor: "pointer" }}
                    ></i>
                  </Link>
                ) : null}
              </div>
              {!isDeletedError ? (
                <div></div>
              ) : (
                <Messages
                  message="Oops, an error occurred, try again please!"
                  changeClass="alert-danger"
                />
              )}
              <div className="row">{filteredSpells.map(renderSpells)}</div>
            </div>
          </Container>
          <BackTop />
          <Footer />
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default Spells;
