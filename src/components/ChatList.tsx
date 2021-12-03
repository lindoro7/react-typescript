import React from 'react'
import List from '@mui/material/List'
import { ChatItem } from './ChatItem'
import { IChat } from '../interfaces'

interface ChatListProps {
  chats: IChat[]
}

export const ChatList: React.FC<ChatListProps> =({chats}) => {
  return (
    <List>
      {chats.map(chat => {
          return (
            <ChatItem 
              chat={chat}
              key={chat.id}
            />
          )
        })}
    </List>
  );
}