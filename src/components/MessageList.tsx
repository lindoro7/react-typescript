import React from 'react'
import { IMessage } from '../interfaces'
import { Message } from './Message'
import List from '@mui/material/List'

type MessageListProps = {
  messages: IMessage[]
  onToggle:(id: string) => void
  onRemove: (id: string) => void
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
    <List>
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
    </List>
  )
}