import { IMessage } from '../../interfaces'

export const ADD_MESSAGE = 'ADD_MESSAGE'
export const DELETE_MESSAGE = 'DELETE_MESSAGE'
export const TOGGLE_MESSAGE_READED = 'DELETE_MESSAGE'

export const addMessage = (message:IMessage) => ({ 
  type: ADD_MESSAGE,
  payload: message 
}) 
export const deleteMessage = { type: DELETE_MESSAGE } 
export const toggleMessageReaded = { type: TOGGLE_MESSAGE_READED }