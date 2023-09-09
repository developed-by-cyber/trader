import React from "react";
import "./Support.css";
import { useState } from "react";
import imgg from "../../../assets/chat.png";
// import { TextareaAutosize } from "@mui/base/TextareaAutosize";
import TextareaAutosize from "react-autosize-textarea";
// import { styled } from '@mui/system';

function Support() {

  const chatInput = document.querySelector(".chat-input textarea");
  const chatbox = document.querySelector(".chatbox");
  let userMessage;
  const [input, setInput] = useState({
    value: "",
  });
  function tog() {
    document.body.classList.toggle("show-chatbot");
  }
  function removetog() {
    document.body.classList.remove("show-chatbot");
  }

  function hand(e) {
    setInput({ value: e.target.value });
    const texters = document.getElementById("texts");
    texters.style.maxHeight = "180px";
    texters.style.overflowY = "hidden";
  }
  function createChatLi(message, className) {
    // create a chat <li> element with passed message and classname
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatcontent =
      className === "outgoing"
        ? `<p>${message}</p>`
        : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatLi.innerHTML = chatcontent;
    return chatLi;
  }
  function HandelChat() {
    // append the users message to chatbox
    userMessage = chatInput.value;
    if (!userMessage) return;
    chatInput.value = "";
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    // admin message or response
    chatbox.appendChild(createChatLi("response", "incoming"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    // autosize textarea 
    const texters = document.getElementById("texts");
    texters.style.maxHeight = "0px";
    texters.style.overflowY = "hidden";
  }


  return (
    <>
      <button onClick={tog} className="chatbot-toggler">
        <span className="material-symbols-rounded">mode_comment</span>
        <span className="material-symbols-outlined">close</span>
      </button>
      <div className="chatbot">
        <header>
          <div className="h">
            <div className="crc">
              <img src={imgg} alt="bot" />
            </div>
            <p>support</p>
          </div>
          <span
            onClick={removetog}
            className="close-btn material-symbols-outlined"
          >
            close
          </span>
        </header>
        <ul className="chatbox">
          <li className="chat incoming">
            <span className="material-symbols-outlined">smart_toy</span>
            <p>
              Hi there 👋
              <br />
              How can I help you today?
            </p>
          </li>
          {/* <li className="chat outgoing">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </li> */}
        </ul>
        <div className="chat-input">
          {/* <TextareaAutosize 
          placeholder="Enter a message..."
          spellCheck="false"
          required
          onChange={hand}
          maxRows={6}
          minRows={2}
        /> */}
          {/* <TextareaAutosize
            maxRows={2.5}
            aria-label="maximum height"
            placeholder="Enter a message..."
            spellCheck="false"
            required
            onChange={hand}
          /> */}
          <TextareaAutosize
            style={{ maxHeight: 180, boxSizing: "border-box" }}
            placeholder="Enter a message..."
            spellCheck="false"
            required
            id="texts"
            onChange={hand}
          />
          {/* <textarea
            placeholder="Enter a message..."
            spellCheck="false"
            required
            onChange={hand}
          ></textarea> */}
          <span
            onClick={HandelChat}
            id="send-btn"
            className="material-symbols-outlined"
          >
            send
          </span>
        </div>
      </div>
    </>
  );
}
export default Support;
