import React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ChatIcon from '@mui/icons-material/Chat'
import Divider from '@mui/material/Divider'
import { IChat } from '../interfaces'

interface ChatProps {
  chat: IChat
}


export const ChatItem: React.FC<ChatProps> = ({chat}) => {
  return (
    <>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <ChatIcon />
          </ListItemIcon>
          <ListItemText primary={chat.theme} />
        </ListItemButton>
      </ListItem>
      <Divider/>
    </>
  )
} 