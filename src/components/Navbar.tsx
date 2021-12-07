import React from 'react'
import { Link } from 'react-router-dom'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import ChatBubbleIcon from '@mui/icons-material/ChatBubble'
import ChatIcon from '@mui/icons-material/Chat';
import Divider from '@mui/material/Divider'

export const Navbar: React.FC = () => {
  return (
    // <nav>
    //     <ul>
    //       <li>
    //         <Link to="/">Profile</Link>
    //       </li>
    //       <li>
    //         <Link to="/chats">Chats</Link>
    //       </li>
    //       <li>
    //         <Link to="/messages">Messages</Link>
    //       </li>
    //     </ul>
    //   </nav>
    <>
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <Link to="/">Profile</Link>
        </ListItemButton>
      </ListItem>
      <Divider/>
    
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <ChatBubbleIcon />
          </ListItemIcon>
          <Link to="/chats">Chats</Link>
        </ListItemButton>
      </ListItem>
      <Divider/>
  
      <ListItem>
        <ListItemButton>
          <ListItemIcon>
            <ChatIcon />
          </ListItemIcon>
          <Link to="/messages">Messages</Link>
        </ListItemButton>
      </ListItem>
      <Divider/>
    </>
  )
}

