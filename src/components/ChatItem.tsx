import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Divider from '@mui/material/Divider'
import { IChat } from '../interfaces'

interface ChatProps {
  chat: IChat
  onRemove: (id: string) => void
}


export const ChatItem: React.FC<ChatProps> = ({chat, onRemove }) => {
  const chatLink = `/chats/${chat.id}`  
  return (
    <>
      <ListItem
        secondaryAction={
          <IconButton 
            edge="end" 
            aria-label="delete"
            onClick={() => {onRemove(chat.id)}}
          >
            <DeleteIcon />
          </IconButton>
        }
      >
        <Link to={chatLink}>
          <ListItemButton>
          
            <ListItemIcon>
              <ChatBubbleOutlineIcon />
            </ListItemIcon>
            
              <ListItemText primary={chat.theme} />
          
          </ListItemButton>
        </Link>
      </ListItem> 
      
      <Divider/>
    </>
  )
} 