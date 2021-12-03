import React from 'react';
import { IMessage } from '../interfaces'
import ListItem from '@mui/material/ListItem'
import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import Avatar from '@mui/material/Avatar'
import FolderIcon from '@mui/icons-material/Folder'

interface MessageProps {
  message: IMessage
  onToggle:(id: string) => void
  onRemove: (id: string) => void
}

export const Message: React.FC<MessageProps> = ({
  message,
  onToggle, 
  onRemove
}) => {
  return (
    <ListItem
      secondaryAction={
        <IconButton 
          edge="end" 
          aria-label="delete"
          onClick={() => {onRemove(message.id)}}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <FolderIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={message.author}
        secondary={message.title}
      />
    </ListItem>
  )
}

