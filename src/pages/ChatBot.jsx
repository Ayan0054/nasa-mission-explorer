import React, { useState } from 'react';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm your NASA Mission Explorer assistant. How can I help you today?", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim() === '') return;

    // Add user message
    const newUserMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user'
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputValue('');

    // Simulate bot response after a delay
    setTimeout(() => {
      const botResponses = [
        "That's a great question about NASA missions!",
        "I can help you explore missions by timeline, category, or search terms.",
        "Did you know NASA has been exploring space for over 60 years?",
        "You can browse our mission categories to learn about human spaceflight, planetary missions, and more.",
        "Try searching for specific missions like 'Apollo 11' or 'Mars Rover'."
      ];

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];

      const newBotMessage = {
        id: messages.length + 2,
        text: randomResponse,
        sender: 'bot'
      };

      setMessages(prev => [...prev, newBotMessage]);
    }, 1000);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const containerStyle = {
    padding: '20px',
    minHeight: '100vh',
    color: '#ffffff',
    marginTop: '70px'
  };

  const titleStyle = {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '30px',
    background: 'linear-gradient(90deg, #6a6aa9, #a0a0d0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    paddingTop: '20px'
  };

  const chatContainerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    background: 'rgba(30, 30, 70, 0.6)',
    borderRadius: '15px',
    border: '1px solid rgba(106, 106, 169, 0.3)',
    backdropFilter: 'blur(10px)',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column'
  };

  const messagesContainerStyle = {
    flex: 1,
    padding: '20px',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px'
  };

  const messageStyle = {
    maxWidth: '70%',
    padding: '12px 15px',
    borderRadius: '18px',
    lineHeight: '1.5'
  };

  const userMessageStyle = {
    ...messageStyle,
    alignSelf: 'flex-end',
    background: 'rgba(106, 106, 169, 0.8)',
    color: '#ffffff'
  };

  const botMessageStyle = {
    ...messageStyle,
    alignSelf: 'flex-start',
    background: 'rgba(50, 50, 100, 0.8)',
    color: '#c0c0e0'
  };

  const inputContainerStyle = {
    display: 'flex',
    padding: '20px',
    borderTop: '1px solid rgba(106, 106, 169, 0.3)'
  };

  const inputStyle = {
    flex: 1,
    padding: '12px 15px',
    borderRadius: '25px',
    border: '1px solid rgba(106, 106, 169, 0.5)',
    background: 'rgba(20, 20, 50, 0.8)',
    color: '#ffffff',
    outline: 'none',
    fontSize: '1rem'
  };

  const buttonStyle = {
    marginLeft: '10px',
    padding: '12px 25px',
    borderRadius: '25px',
    border: 'none',
    background: 'linear-gradient(90deg, #4a4a8c, #6a6aa9)',
    color: '#ffffff',
    cursor: 'pointer',
    fontWeight: '600'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}>NASA Explorer ChatBot</h1>
      <div style={chatContainerStyle}>
        <div style={messagesContainerStyle}>
          {messages.map((message) => (
            <div
              key={message.id}
              style={message.sender === 'user' ? userMessageStyle : botMessageStyle}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div style={inputContainerStyle}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask me about NASA missions..."
            style={inputStyle}
          />
          <button onClick={handleSend} style={buttonStyle}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;