import { Grid, Button, Input } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import React, { useState } from 'react'

interface MessageFormProps {
  onAdd(title: string, author: string, chatID: string): void
  chatID: string
}

export const MessageForm: React.FC<MessageFormProps> = ({onAdd, chatID}) => {
  const [title, setTitle] = useState<string>('')
  const [author, setAuthor] = useState<string>('')
  const defaultName: string = 'anonimous'

  
  const titleInput: HTMLElement | null = document.getElementById('title')

  const titleHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value)
  }

  const authorHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuthor(event.target.value)
  }

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onAdd(title, (author || defaultName), chatID)
      setTitle('')
      setAuthor(author)
      titleInput?.focus()
    }
  }

  const formSubmitHandler = (event: React.MouseEvent) => {
    event.preventDefault()
    onAdd(title, author || defaultName, chatID)
    setTitle('')
    setAuthor(author)
    titleInput?.focus()
  }

  
  
  
  return (
    <Grid 
      container  
      columnSpacing={1} 
      rowSpacing={1}
      sx={{mb: 5}}
    >
      <Grid item xs={5}>
        <Input
          sx={{width: '60%'}}
          autoFocus={true}
          placeholder='NAME: anonimous'
          onChange={authorHandler}
          value={author} 
          type="text" 
          id="author" 
          onKeyPress={keyPressHandler}
          tabIndex={1}
        />
      </Grid>
      <Grid item xs={5}>
        <Input
          sx={{width: '100%'}}
          placeholder='Enter your message'
          value={title} 
          type="text" 
          id="title" 
          onKeyPress={keyPressHandler}
          onChange={titleHandler}
          tabIndex={2}
        />
      </Grid>
      <Grid item xs={2}>
        <Button 
          variant='contained'
          color='secondary'
          onClick={formSubmitHandler}
          sx={{ 
            width: 100,
          }}
          tabIndex={3}
        >
          <SendIcon/>
        </Button>
      </Grid>
    </Grid>
  )
}