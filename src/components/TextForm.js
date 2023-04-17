import React, { useState } from "react";
import { getModeColor, getModeTextColor, getTitleCase } from "../utils";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to upper case", "Success")
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to lower case", "Success")

  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const getWordCount = (text) => {
    return text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;
  };

  const getCharCount = (text) => {
    let newText = text;
    newText = newText.replace(/\s+/g, "");
    return newText.trim().length;
  };

  const getMinsToRead = (text) => {
    let timeInMins = 0.008 * getWordCount(text);

    if (timeInMins >= 0.5) {
      return timeInMins.toString() + " Minutes";
    } else {
      return (timeInMins * 60).toString() + " Seconds";
    }
  };

  const getPreview = (text) => {
    if (text.length > 0){
        let newText = text;
        newText = newText.replace(/\s+/g, " ");
        return newText;
    } else {
        return "Nothing to preview"
    }
  };

  const handleClickClear = () => {
    setText("");
    props.showAlert("Text cleared", "Success")
  };

  const handleClickTitleCase = () => {
    setText(getTitleCase(text));
    props.showAlert("Converted to title case", "Success")
  };

  return (
    <>
      <div className="container" style={{color: getModeTextColor(props.mode)}}>
        <h1 className="mb-2">{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="10"
            style={{backgroundColor: getModeColor(props.mode, false), color: getModeTextColor(props.mode)}}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={handleUpClick} disabled={text.length === 0}>
          Upper Case
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleLowClick} disabled={text.length === 0}>
          Lower Case
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClickTitleCase} disabled={text.length === 0}>
          Title Case
        </button>
        <button className="btn btn-primary mx-1 my-1" onClick={handleClickClear} disabled={text.length === 0}>
          Clear
        </button>
      </div>
      <div className="container my-3" style={{color: getModeTextColor(props.mode)}}>
        <h1>Your text summary</h1>
        <p>
          {getWordCount(text)} words and {getCharCount(text)} characters
        </p>
        <p>{getMinsToRead(text)} read</p>
        <h2>Preview</h2>
        <p>{getPreview(text)}</p>
      </div>
    </>
  );
}
