import React, { useEffect, useState } from "react";
import "./MessageForm.css";

function MessageForm({ onMessageSend }) {
  const [messages, setMessages] = useState([]);
  let [message, setMessage] = useState("");

  let result;

  async function handleFormSubmit(event) {
    event.preventDefault();

    if (message.replaceAll(" ", "") === "") return;
    else {
      setMessages([
        ...messages,
        {
          body: message,
          me: true,
        },
      ]);
      const url = `http://localhost:3001/message/${`${message}`}/`;
      setMessage((message = ""));
      let res = await fetch(url, {
        method: "GET",
      });

      if (res.ok) {
        result = await res.json();
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            body: result.message,
            me: false,
          },
        ]);
      }
    }
  }

  // onMessageSend(messages);
  // use useEffect to call onMessageSend after messages changes
  useEffect(() => {
    onMessageSend(messages);
  }, [messages, onMessageSend]); // pass messages as a dependency

  return (
    <form
      id="formElem"
      className="MessageForm"
      onSubmit={handleFormSubmit}
      data-testid="submit-message"
    >
      <div className="input-container">
        <input
          data-testid="input-message"
          type="text"
          placeholder="پیام خود را اینجا بنویسید..."
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          autoFocus
        />
      </div>
      <div className="button-container">
        <button type="submit">ارسال</button>
      </div>
    </form>
  );
}

export default MessageForm;
