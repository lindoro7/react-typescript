import React from 'react';
import { IMessage } from '../interfaces'

interface MessageProps {
  message: IMessage
  onToggle:(id: number) => void
  onRemove: (id: number) => void
}

export const Message: React.FC<MessageProps> = ({
  message,
  onToggle, 
  onRemove
}) => {
  return (
    <li  className="message mw30" >
      {/* <label>
        <input 
          type="checkbox" 
          checked={message.readed} 
          onChange={() => onToggle(message.id)}
        />
        <span >{message.title}</span>
        <p >{message.author}</p>
        <i 
          className="material-icons red-text" 
          onClick={() => onRemove(message.id)}
        >delete</i>
      </label> */}
      <div className={message.readed ? "card-panel blue accent-2 p5-15" : "card-panel blue lighten-5"}>
        <p className="message__author">{message.author}</p>
        <p className="message__title">{message.title}</p>
      </div>
    </li>
  )
}

