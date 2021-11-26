import React from 'react'
import { IMessage } from '../interfaces'
import { Message } from './Message'

type MessageListProps = {
  messages: IMessage[]
  onToggle:(id: number) => void
  onRemove: (id: number) => void
}

export const MessageList: React.FC<MessageListProps> = ({
  messages, 
  onToggle, 
  onRemove
}) => {
  if (messages.length === 0) {
    return <p className="center">Нет сообщений</p>
  }
  return (
    <ul className="col s6 offset-s3">
      {messages.map(message => {
        return (
          <Message 
            message={message}  
            onToggle={onToggle}
            onRemove={onRemove}
            key={message.id}
          />
        )
      })}
    </ul>
  )
}