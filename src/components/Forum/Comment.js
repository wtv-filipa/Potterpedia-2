/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { deleteComment1, updateComment1 } from "../../store/forum/actions";
import EditableComment from "./EditableComment";
import "../../styles/forum.css";

const Span = styled.span`
  font-size: 12px;
`;

export default (comment) => {
  const [isEditing, setIsEditing] = useState(false);
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

  const onUpdateComment = (body) => {
    dispatch(updateComment1(comment.id, body));
    setIsEditing(false);
  };

  const onDeleteComment = () => dispatch(deleteComment1(comment.id));

  if (isEditing) {
    return (
      <EditableComment
        {...comment}
        onConfirm={onUpdateComment}
        onCancel={() => setIsEditing(false)}
      />
    );
  }

  return (
    <div className="be-comment mb-5" key={comment.id}>
      <div className="be-img-comment">
        <img src={comment.userImage} alt="avatar" className="be-ava-comment" />
      </div>
      <div className="be-comment-content">
        <div className="row">
          <span className="be-comment-name col-8">
            <span className="pr-3">{comment.userName}</span>
            {isAuthenticated && (comment.userId === user.sub) ? (
              <>
                <i
                  className="far fa-trash-alt pr-3"
                  onClick={onDeleteComment}
                  style={{ cursor: "pointer" }}
                ></i>
                <i
                  className="far fa-edit"
                  onClick={() => setIsEditing(true)}
                  style={{ cursor: "pointer" }}
                ></i>
              </>
            ) : null}
          </span>
          <Span className="col-4 text-right">
            {new Date(comment.timestamp).toLocaleDateString()}
          </Span>
        </div>
        <p className="be-comment-text">{comment.body}</p>
      </div>
    </div>
  );
};
