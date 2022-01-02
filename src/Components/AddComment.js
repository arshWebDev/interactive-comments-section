import React, { useState } from "react";
import "./Styles/AddComment.scss";

const AddComment = ({ buttonValue, addComments, replyingTo }) => {
  const [comment, setComment] = useState(replyingTo ? `@${replyingTo}, ` : "");

  let changeHandler = (e) => {
    setComment(e.target.value);
  };

  let clickHandler = () => {
    if (comment == "" || comment == " ") return;

    let newComment = {
      id: Math.floor(Math.random() * 100) + 5,
      content: comment,
      createdAt: new Date(),
      score: 0,
      username: "juliusomo",
      currentUser: true,
      replies: [],
    };

    addComments(newComment);
    setComment("");
  };

  return (
    <div className="add-comment">
      <div className="profile-pic"></div>
      <textarea
        className="comment-input"
        placeholder="Add a comment"
        value={comment}
        onChange={changeHandler}
      />
      <div className="send-btn-container">
        <div className="profile-pic"></div>
        <button className="add-btn" onClick={clickHandler}>
          {buttonValue}
        </button>
      </div>
    </div>
  );
};

export default AddComment;
