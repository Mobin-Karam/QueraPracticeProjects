import React from 'react';
import './MessageForm.css';

function MessageForm({ onMessageSend }) {

  function handleFormSubmit(event) {
  }
  return (
    <form
      className="MessageForm"
      onSubmit={handleFormSubmit}
      data-testid="submit-message"
    >
      <div className="input-container">
        <input
          data-testid="input-message"
          type="text"
          placeholder="پیام خود را اینجا بنویسید..."
        />
      </div>
      <div className="button-container">
        <button type="submit">ارسال</button>
      </div>
    </form>
  );
}

export default MessageForm;
