import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import { createComment1, getComments } from "../../store/forum/actions";
import EditableComment from "./EditableComment";
import Comment from "./Comment";
import Loading from "../Loading";
import ErrorPage from "../Error";
import Messages from "../Messages";
import Navbar1 from "../Navbar";
import Footer from "../Footer";
import BackTop from "../BtnToTop";
import BannerForum from "./BannerForum/";

import "../../styles/forum.css";

const ListComments = styled.div`
  margin-top: 5%;
  margin-bottom: 50px !important;
  border-radius: 2px;
  padding: 50px 70px;
`;

const Hr = styled.hr`
  border-color: #cccccc;
  margin-bottom: 5%;
`;

const Heading4 = styled.h2`
  font-family: "Amatic SC", cursive;
  margin-bottom: 5%;
`;

const CommentsList = () => {
  const isLoading = useSelector((state) => state.comments.isLoading);
  const isError = useSelector((state) => state.comments.isError);
  const isCreated = useSelector((state) => state.comments.isCreated);
  const isCreatedError = useSelector((state) => state.comments.isCreatedError);
  const isUpdatedError = useSelector((state) => state.comments.isUpdatedError);
  const isDeletedError = useSelector((state) => state.comments.isDeletedError);
  const comments = useSelector(({ comments }) => comments.data);
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const [order, setOrder] = useState("desc");

  let orderedComment;

  if (order === "desc") {
    orderedComment = [...comments].sort((a, z) => {
      if (a.timestamp > z.timestamp) {
        return -1;
      }
      if (z.timestamp < a.timestamp) {
        return 1;
      }
      return 0;
    });
  }

  useEffect(() => {
    dispatch(getComments());
  }, [dispatch]);

  const onCreateComment = (body) => dispatch(createComment1(body));

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
        <div>
          <Navbar1 />
          <BannerForum />
          <div className="container">
            <ListComments>
              {isAuthenticated ? (
                <>
                  <Heading4>Create a New Comment!</Heading4>
                  {isCreated ? (
                    <Messages
                      message="The comment was added with sucess!"
                      changeClass="alert-success"
                    />
                  ) : null}
                  {isCreatedError ? (
                    <Messages
                      message="Oops, an error occurred, try again please!"
                      changeClass="alert-danger"
                    />
                  ) : null}
                  <EditableComment isCreation onConfirm={onCreateComment} />
                  <Hr />
                </>
              ) : null}
                <Heading4 className="col-8 text-left mb-5">
                  All comments
                </Heading4>
              {isUpdatedError ? (
                <Messages
                  message="Oops, an error occurred, try again please!"
                  changeClass="alert-danger"
                />
              ) : null}
              {isDeletedError ? (
                <Messages
                  message="Oops, an error occurred while deleting your comment, try again please!"
                  changeClass="alert-danger"
                />
              ) : null}
              {orderedComment.map((comment) => (
                <Comment key={comment.id} {...comment} />
              ))}
            </ListComments>
          </div>
          <BackTop />
          <Footer />
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
};

export default CommentsList;
