"use client";
import { useState } from "react";
import Navbar from "../components/nav";

const NewPost = () => {
  const [titleValue, setTitleValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const [valueErrorTitle, setValueErrorTitle] = useState(null);
  const [valueErrorText, setValueErrorText] = useState(null);

  const handlePublish = () => {
    if (titleValue.length === 0) {
      setValueErrorTitle("hooson bj bolku!");
      if (textValue.length === 0) {
        setValueErrorText("hooson bj bolku!");
      } else {
        setValueErrorText("");
      }
    } else if (textValue.length === 0) {
      setValueErrorText("hooson bj bolku!");
      if (titleValue.length === 0) {
        setValueErrorTitle("hooson bj bolku!");
      } else {
        setValueErrorTitle("");
      }
    } else {
      setValueErrorText("");
      setValueErrorTitle("");
      if (titleValue.length > 0) {
        if (textValue.length > 0) {
          alert("amjilttai");
        }
      }
    }
  };
  return (
    <div className="Page-container">
      <div>
        <Navbar />
      </div>
      <div className="newPost-container">
        <div className="newPost-nav-container">
          <div className="newPost-nav-createText">Create Post</div>
          <div className="newPost-nav-btns">
            <div className="newPost-nav-editText">Edit</div>
            <div className="newPost-nav-previewText">Preview</div>
          </div>
          <div className="newPost-nav-exit">Exit</div>
        </div>
        <div className="newPost-input-container">
          <input
            placeholder="New post title here..."
            className="newPost-title-input"
            onChange={(e) => setTitleValue(e.target.value)}
          />
          {valueErrorTitle ? (
            <div className="error-text">{valueErrorTitle}</div>
          ) : (
            ""
          )}
          <textarea
            className="newPost-text-input"
            placeholder="Write your post content here..."
            onChange={(e) => setTextValue(e.target.value)}
          ></textarea>{" "}
          {valueErrorText ? (
            <div className="error-text">{valueErrorText}</div>
          ) : (
            ""
          )}
          <button
            className="newPost-btn-publish"
            onClick={() => handlePublish()}
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
};
export default NewPost;
