import React from 'react'
import { useParams } from 'react-router-dom'
import { MessageForm } from './MessageForm'
import List from '@mui/material/List'
import { IChat, IMessage } from '../interfaces'
import { Message } from './Message'

interface ChatSingleProps {
  onAdd(title: string, author: string, chatID: string): void
  chats: IChat[]
  messages: IMessage[]
  onToggle:(id: string) => void
  onRemove: (id: string) => void
}

export const ChatSingle: React.FC<ChatSingleProps> = ({ onAdd, chats, messages, onToggle, onRemove }) => {
  let { id } = useParams()
  let currentMessages = []
  const currentChat = chats.find(chat => chat.id === id)
  let chatID = currentChat!.id
  currentMessages = messages.filter(message => message.chatID === currentChat!.id)
  return (
    <>
      <MessageForm onAdd={onAdd} chatID={chatID}/>
      <h1>{currentChat!.theme}</h1>
      <List>
        {currentMessages?.map(message => {
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
    </>
  )
}