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
    <li  className={message.readed ? 'readed' : ''} >
      <label>
        <input 
          type="checkbox" 
          checked={message.readed} 
          onChange={() => onToggle(message.id)}
        />
        <span >{message.title}</span>
        <i 
          className="material-icons red-text" 
          onClick={() => onRemove(message.id)}
        >delete</i>
      </label>
    </li>
  )
}

