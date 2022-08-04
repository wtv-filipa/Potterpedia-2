import React, { useState, useRef } from "react";
import styled from "styled-components";
import ava from "../../imgs/ava.jpg";
import { useAuth0 } from "@auth0/auth0-react";
import ForumSchema from "../../schemas/ForumSchema";
import { Formik, Form, ErrorMessage, Field } from "formik";

const CommentEditable = styled.div`
  margin-bottom: 5%;
`;

const CommentFooter = styled.div`
  text-align: right;
`;

const CommentButton = styled.button`
  background-color: transparent;

  border: 1px solid #aaa;
  border-radius: 3px;
  margin-left: 5px;
`;

const CommentBodyTextArea = styled(Field)`
  font-size: 13px;
  font-weight: 400;
  width: 100%;
  height: 80px;
  padding-left: 20px;
  padding-right: 20px;
  border: 1px solid #edeff2;
  border-radius: 3px;
`;

const StyledErrorMessage = styled(ErrorMessage)`
  height: 1.75rem;
  font-size: 13px;
  color: red;
`;

const EditableComment = ({
  id,
  body = "",
  isCreation,
  onConfirm,
  onCancel,
}) => {
  //const { user } = useAuth0();

  return (
    <CommentEditable key={id}>
      <Formik
        validateOnBlur
        initialValues={{ body }}
        validationSchema={ForumSchema}
        onSubmit={({ body }, actions) => {
          onConfirm(body);
          actions.resetForm();
        }}
      >
        {({ handleSubmit }) => (
          <Form>
            <div className="be-comment">
              <div className="be-img-comment">
                <img src={ava} alt="avatar" className="be-ava-comment" />
              </div>
              <div className="be-comment-content">
                <StyledErrorMessage name="body" component="div" />
                <CommentBodyTextArea
                  name="body"
                  component="textarea"
                  placeholder="Insert your comment here..."
                />
              </div>
              <CommentFooter>
                {!isCreation ? (
                  <CommentButton onClick={onCancel}>Cancel</CommentButton>
                ) : null}

                <CommentButton type="submit" onClick={handleSubmit}>
                  {isCreation ? "Create" : "Confirm"}
                </CommentButton>
              </CommentFooter>
            </div>
          </Form>
        )}
      </Formik>
    </CommentEditable>
  );
};

export default EditableComment;
