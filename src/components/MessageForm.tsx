import React, { useState } from 'react'

interface MessageFormProps {
  onAdd(title: string, author: string): void
}

export const MessageForm: React.FC<MessageFormProps> = ({onAdd}) => {
  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')

  // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setTitle(event.target.value)
  //   setAuthor(event.target.value)
  // }

  // const changeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setTitle(title)
  //   setAuthor(author)
  // }

  const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const authorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value)
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onAdd(title, author)
      setTitle('')
      setAuthor('')
    }
  }

  const formSubmitHandler = (event: React.MouseEvent) => {
    event.preventDefault()
    onAdd(title, author)
    setTitle('')
    setAuthor('')
  }

  
  
  return (
    <div className="row">
      <form className="col s12">
          <div className="input-field mt3 ">
            <input 
              className="col s2"
              onChange={authorHandler}
              value={author} 
              type="text" 
              id="author" 
              onKeyPress={keyPressHandler}
            />
          </div>
          <div className="input-field mt3 ">
            <input 
              className="col s8 offset-s1"
              onChange={titleHandler}
              value={title} 
              type="text" 
              id="title" 
              onKeyPress={keyPressHandler}
            />
          </div>  
          <button 
            className="waves-effect waves-light btn z-depth-4 col s1"
            onClick={formSubmitHandler}
          >
            <i className="medium material-icons">send</i>
          </button>
      </form>
    </div>
  )
}