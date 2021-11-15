import React, { useState } from 'react'

interface MessageFormProps {
  onAdd(title: string): void
}

export const MessageForm: React.FC<MessageFormProps> = ({onAdd}) => {
  const [title, setTitle] = useState<string>('')

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onAdd(title)
      setTitle('')
    }
  }
  
  return (
    <div className="input-field mt3">
      <input 
        onChange={changeHandler}
        value={title} 
        type="text" 
        id="title" 
        onKeyPress={keyPressHandler}
      />
      <label htmlFor="title" className="active">Input your message</label>
    </div>
  )
}