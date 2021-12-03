import React, { useState, useEffect } from 'react'
import { IMessage} from './interfaces'
import { Grid } from '@mui/material'
import { v4 as uuid } from 'uuid'
import { Navbar } from './components/Navbar'
import { MessageForm } from './components/MessageForm'
import { MessageList } from './components/MessageList'
import { ChatList } from './components/ChatList'
import { IChat } from './interfaces'
import { FakeDB } from './db'


const App: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([])
  const [chats, setChats] = useState<IChat[]>([])
  


  const addHandler = (title: string, author: string) => {
    const newMessage: IMessage = {
      id: uuid(),
      title: title,
      author: author,
      readed: false,
      isAnswered: false
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

  useEffect(() => {
    if(messages[0] && (messages[0].author !== 'Admin') && !messages[0].isAnswered) {
      let message = messages[0]
      setTimeout(() => {
        message.isAnswered = true
        addHandler('Фиксированное сообщение с текстом)))', 'Admin')
      }, 1500)
    }
  }, [messages])

  useEffect(() => {
    setChats(FakeDB.chats)
  }, [chats])

  return (
    <Grid container>

      <Grid item xs={12}>
        <Navbar />
      </Grid>

      <Grid item xs={3} columnSpacing={2}>
        <ChatList chats={FakeDB.chats}/>
      </Grid>
        
      <Grid item xs={9}>
          <MessageForm  onAdd={addHandler}/>
        
          <MessageList 
            messages={messages} 
            onToggle={toggleMessage}
            onRemove={removeMessage}
          />
      </Grid>

    </Grid>
  );
}

export default App
