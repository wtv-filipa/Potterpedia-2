import React from "react";
import { useSelector } from "react-redux";
import Navbar1 from "../../components/Navbar";
import BannerAddSpell from "../../components/Spells/SpellsBanner/bannerAddSpell";
import AddSpellCard from "../../components/Spells/AddSpell";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import ErrorPage from "../../components/Error";
import Messages from "../../components/Messages";
import Error404 from "../../components/404";
import styled from "styled-components";
import { useAuth0 } from "@auth0/auth0-react";

const Container = styled.div`
  background: black;
`;

const AddSpell = (titleBanner) => {
  const isError = useSelector((state) => state.spells.isError);
  const isLoading = useSelector((state) => state.spells.isLoading);
  const isCreated = useSelector((state) => state.spells.isCreated);
  const isCreatedError = useSelector((state) => state.spells.isCreatedError);
  const { isAuthenticated } = useAuth0();

  if (isError) {
    return (
      <div>
        <ErrorPage />
      </div>
    );
  }

  return (
    <section>
      {!isLoading ? (
        isAuthenticated ? (
          <div>
            <Navbar1 />
            <Container>
              <BannerAddSpell titulo="Add a new spell" />
              <div className="container">
                {isCreated ? (
                  <Messages
                    message="The Spell was added with sucess!"
                    changeClass="alert-success"
                  />
                ) : null}
                {isCreatedError ? (
                  <Messages
                    message="Oops, an error occurred, try again please!"
                    changeClass="alert-danger"
                  />
                ) : null}
                <AddSpellCard />
              </div>
              <Footer />
            </Container>
          </div>
        ) : (
          <div>
            <Navbar1 />
            <Error404 />
          </div>
        )
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default AddSpell;
