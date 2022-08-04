import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getSpells } from "../../store/spells/actions";
import Navbar1 from "../../components/Navbar";
import BannerAddSpell from "../../components/Spells/SpellsBanner/bannerAddSpell";
import UpdateSpellCard from "../../components/Spells/UpdateSpell";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import ErrorPage from "../../components/Error";
import Error404 from "../../components/404";
import Messages from "../../components/Messages";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Container = styled.div`
  background: black;
`;

const UpdateSpell = () => {
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.spells.isError);
  const isLoading = useSelector((state) => state.spells.isLoading);
  const isUpdated = useSelector((state) => state.spells.isUpdated);
  const isUpdatedError = useSelector((state) => state.spells.isUpdatedError);
  const { isAuthenticated } = useAuth0();
  const { id } = useParams();

  const spell = useSelector((state) => {
    return state.spells.data.find((spell) => spell.id == id);
  });

  useEffect(() => {
    if (spell) {
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

  if (!spell) {
    return (
      <div>
        <Navbar1 />
        <Error404 />
      </div>
    );
  }
  return (
    <section>
      {!isLoading && spell ? (
        (isAuthenticated ? (
        <div>
          <Navbar1 />
          <Container>
            <BannerAddSpell titulo="Update Spell" />
            <div className="container">
              {isUpdated ? (
                <Messages
                  message="The Spell was updated with sucess!"
                  changeClass="alert-success"
                />
              ) : null}
              {isUpdatedError ? (
                <Messages
                  message="Oops, an error occurred, try again please!"
                  changeClass="alert-danger"
                />
              ) : null}
              <UpdateSpellCard {...spell} />
            </div>
            <Footer />
          </Container>
        </div>
        ):(
        <div>
          <Navbar1 />
          <Error404 />
        </div>
        ))
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default UpdateSpell;
