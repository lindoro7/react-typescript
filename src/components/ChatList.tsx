import React from 'react'
import List from '@mui/material/List'
import { ChatItem } from './ChatItem'
import { IChat } from '../interfaces'

interface ChatListProps {
  chats: IChat[]
  onRemove: (id: string) => void
}

export const ChatList: React.FC<ChatListProps> =({chats, onRemove}) => {
  if (chats.length === 0) {
    return <p className="center">Нет чатов</p>
  }
  return (
    <List>
      {chats.map(chat => {
          return (
            <ChatItem 
              onRemove={onRemove}
              chat={chat}
              key={chat.id}
            />
          )
        })}
    </List>
  );
}