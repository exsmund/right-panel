import './ChatMessage.scss';

function ChatMessage({message: {me, avatar, name, message, date}}) {
  return (
    <div
      className={'ChatMessage' + (me ? ' ChatMessage__me' : '')}
    >
      <div class="ChatMessage-avatar">
        <img src={avatar} />
      </div>
      <div class="ChatMessage-body">
        <div class="ChatMessage-name">
          {name}
        </div>
        <div class="ChatMessage-message">
          { message }
          <span class="ChatMessage-date">
            { date }
            <span class="ChatMessage-date__w">{ date }</span>
          </span>
        </div>
        <svg viewBox="0 0 11 20"  class="ChatMessage-tail">
          <g transform="translate(9 -14)" fill="inherit" fill-rule="evenodd"><path d="M-6 16h6v17c-.193-2.84-.876-5.767-2.05-8.782-.904-2.325-2.446-4.485-4.625-6.48A1 1 0 01-6 16z" transform="matrix(1 0 0 -1 0 49)" id="corner-fill" fill="inherit"></path></g>
        </svg>
      </div>
    </div>
  );
}

export default ChatMessage;
