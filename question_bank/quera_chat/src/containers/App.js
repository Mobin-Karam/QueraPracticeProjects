import React, { useState } from "react";
import MessageForm from "../components/MessageForm/MessageForm";
import MessageList from "../components/MessageList/MessageList";
import "./App.css";

function App() {
  const [messages, setMessages] = useState(null);
  // console.log(messages);
  return (
    <div className="App">
      <MessageList messages={messages} />
      <MessageForm onMessageSend={setMessages} />
    </div>
  );
}

export default App;
