import React, { useState, useEffect } from 'react'
import { Navbar } from './components/Navbar'
import { MessageForm } from './components/MessageForm'
import { MessageList } from './components/MessageList'
import { IMessage} from './interfaces'

const App: React.FC = () => {
  const [messages, setMessages] = useState<IMessage[]>([])

  const addHandler = (title: string, author: string) => {
    const newMessage: IMessage = {
      id: Date.now(),
      title: title,
      author: author || 'anonimous',
      readed: false,
    }
    if(title === '') return
    setMessages(prevState => [newMessage, ...prevState])
  }

  const toggleMessage = (id: number) => {
    const editedMessage = messages.find(message => message.id === id)
    editedMessage!.readed = !editedMessage!.readed
    setMessages(prevState => prevState.map(message => {
      if(message.id === id) {
        message.readed = editedMessage!.readed
      }
      return message
    })) 
    
  }

  const removeMessage = (id: number) => {
    setMessages(prevState => 
      prevState.filter(message => message.id !== id)
    )
  }

  useEffect(() => {
    if(messages[0] && (messages[0].author !== 'Admin')) {
      setTimeout(() => {
        addHandler('Фиксированное сообщение с текстом)))', 'Admin')
      }, 1500)
    }
  }, [messages])

  return (
    <>
      <Navbar />
      <div className="container">
        <MessageForm  onAdd={addHandler}/>

        <MessageList 
          messages={messages} 
          onToggle={toggleMessage}
          onRemove={removeMessage}
        />
      </div>
    </>
  );
}

export default App
