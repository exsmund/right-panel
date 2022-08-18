import { useRef, useState } from "react";
import ChatMessage from "../chat-message/ChatMessage";
import './Chat.scss';

const initMessages = [
  {
    me: false,
    avatar: '/right-panel/ava1.jpg',
    name: 'Exsmund',
    message: 'Hi!',
    date: '11:55',
  },
  {
    me: true,
    avatar: '/right-panel/ava1.jpg',
    name: 'Evgenii',
    message: 'Hi!',
    date: '11:56',
  },
  {
    me: false,
    avatar: '/right-panel/ava1.jpg',
    name: 'Exsmund',
    message: 'Hi!',
    date: '11:57',
  },
  {
    me: false,
    avatar: '/right-panel/ava1.jpg',
    name: 'Exsmund',
    message: 'Hi!',
    date: '11:57',
  },
  {
    me: false,
    avatar: '/right-panel/ava1.jpg',
    name: 'Exsmund',
    message: 'Hi!',
    date: '11:57',
  },
  {
    me: false,
    avatar: '/right-panel/ava1.jpg',
    name: 'Exsmund',
    message: 'Hi!',
    date: '11:57',
  },
  {
    me: false,
    avatar: '/right-panel/ava1.jpg',
    name: 'Exsmund',
    message: 'Hi!',
    date: '11:57',
  },
]

function Chat() {
  const [messages, setMessages] = useState(initMessages)
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    messages.push({
      me: true,
      avatar: '/right-panel/ava1.jpg',
      name: 'Exsmund',
      message: inputRef.current.value,
      date: '11:57',
    })
    inputRef.current.value = '';
    console.log(inputRef);
    setMessages([...messages]);
  }
  return (
    <div className="Chat-root">
      <h2 className="Chat-title">Чат</h2>
      <div className="Chat-messages">
        {messages.map((m) => (
          <ChatMessage message={m} />
        ))}
      </div>
      <form className="Chat-form" onSubmit={handleSubmit}>
        <textarea
          className="Chat-input"
          formControlName="message"
          placeholder="Введите сообщение..."
          ref={inputRef}
        ></textarea>
        <button
          type="submit"
          className="Chat-button"
        >
          ↩
        </button>
      </form>
    </div>
  );
}

export default Chat;
