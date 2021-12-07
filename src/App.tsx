import React, { useState, useEffect} from 'react'
import { Routes, Route, Outlet } from "react-router-dom"
import { IMessage} from './interfaces'
import { Grid } from '@mui/material'
import { v4 as uuid } from 'uuid'
import { Navbar } from './components/Navbar'
import { MessageForm } from './components/MessageForm'
import { MessageList } from './components/MessageList'
import { ChatList } from './components/ChatList'
import { IChat } from './interfaces'
import { FakeDB } from './db'
import { Header } from './components/Header'
import { Profile } from './components/Profile'
import { ChatSingle } from './components/ChatSingle'
import { NoMatch } from './components/NoMatch'

const App: React.FC = () => {
  
  const [messages, setMessages] = useState<IMessage[]>([])
  const [chats, setChats] = useState<IChat[]>(FakeDB.chats)
  const commonChatID = 'common-chat'
  const commonMessages = messages.filter(message => message.chatID === commonChatID)


  const addHandler = (title: string, author: string, chatID: string) => {
    const newMessage: IMessage = {
      id: uuid(),
      title: title,
      author: author,
      readed: false,
      isAnswered: false,
      chatID: chatID
    }
    if(title === '') return
    setMessages(prevState => [newMessage, ...prevState])
  }

  const toggleMessage = (id: string) => {
    const editedMessage = messages.find(message => message.id === id)
    editedMessage!.readed = !editedMessage!.readed
    setMessages(prevState => prevState.map(message => {
      if(message.id === id) {
        message.readed = editedMessage!.readed
      }
      return message
    })) 
    
  }

  const removeMessage = (id: string) => {
    setMessages(prevState => 
      prevState.filter(message => message.id !== id)
    )
  }

  const removeChat = (id: string) => {
    setChats(prevState => 
      prevState.filter(chat => chat.id !== id)
    )
  }

  useEffect(() => {
    if(messages[0] && (messages[0].author !== 'Admin') && !messages[0].isAnswered) {
      let message = messages[0]
      setTimeout(() => {
        message.isAnswered = true
        addHandler('Фиксированное сообщение с текстом)))', 'Admin', message.chatID)
      }, 1500)
    }
  }, [messages])

  return (
    <Grid container>

      <Grid item xs={12}>
        <Header />
      </Grid>

      <Grid item xs={3} columnSpacing={2}>
        <Navbar />
      </Grid>
        
      <Grid item xs={9}>
      <Routes>
        
          <Route path='/' element={<Profile />} />
          <Route path="/chats" 
            element={
              <ChatList 
                chats={chats}
                onRemove={removeChat}
              />
            } 
          />
          
          <Route path='/chats/:id' 
              element={
                <ChatSingle 
                  onAdd={addHandler}
                  chats={chats}
                  messages={messages}
                  onToggle={toggleMessage}
                  onRemove={removeMessage}
                />
              } 
            /> 

          <Route path="/messages" 
            element={
              <>
                <MessageForm onAdd={addHandler} chatID={commonChatID}/>
                <MessageList 
                  messages={commonMessages} 
                  onToggle={toggleMessage}
                  onRemove={removeMessage}
                />
              </>
            } 
            />

          <Route path="*" element={<NoMatch />} />
        
      </Routes>
        <Outlet />
      </Grid>

    </Grid>
  );
}

export default App
