import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createSpell1 } from "../../../store/spells/actions";
import "../../../styles/Spells.css";
import styled from "styled-components";
import { Formik, Form, ErrorMessage, Field } from "formik";
import SpellsSchema from "../../../schemas/SpellsSchema";

const SpellInput = styled(Field)`
  width: 100%;
  height: 2rem;
  margin-bottom: 0.5rem;
`;
const SpellTextArea = styled(Field)`
  width: 100%;
  min-height: 150px;
  text-overflow: ellipsis;
`;

const StyledErrorMessage = styled(ErrorMessage)`
  height: 1.75rem;
  font-size: 13px;
  color: red;
`;

const ButtonAdd = styled.button`
  background-color: transparent;
  border: 1px solid #aaa;
  border-radius: 3px;
  margin-left: 5px;
`;
const Div = styled.div`
  display: block;
  margin: auto;
`;

const AddSpellCard = ({ id, effect = "", spell = "", type = "" }) => {
  const [initialValues, setInitialValues] = useState({ effect, spell, type });

  const dispatch = useDispatch();
  const onConfirm = (effect, spell, type) => {
    dispatch(createSpell1(effect, spell, type));
  };
  return (
    <div id="spells" className="col-12">
      <Formik
        validateOnBlur
        initialValues={initialValues}
        validationSchema={SpellsSchema}
        onSubmit={({ effect, spell, type }) => {
          setInitialValues({ effect: "", spell: "", type: "" });
          onConfirm(effect, spell, type);
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <div className="card">
              <div className="card-body text-left">
                <label for="spell">Name: </label>
                <StyledErrorMessage name="spell" component="div" />
                <SpellInput
                  id="spell"
                  name="spell"
                  type="text"
                  placeholder="Spell name..."
                />

                <label for="type">Type of spell: </label>
                <StyledErrorMessage name="type" component="div" />
                <SpellInput
                  id="type"
                  name="type"
                  type="text"
                  placeholder="Spell type..."
                />

                <label for="effect">Effect of the spell: </label>
                <StyledErrorMessage name="effect" component="div" />
                <SpellTextArea
                  id="effect"
                  name="effect"
                  component="textarea"
                  placeholder="Describe the effect of the spell..."
                />

                <Div className="row text-center">
                  <Link to="/spells">
                    <ButtonAdd>Cancel</ButtonAdd>
                  </Link>
                  <ButtonAdd type="submit" onClick={handleSubmit}>
                    Create
                  </ButtonAdd>
                </Div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default AddSpellCard;
