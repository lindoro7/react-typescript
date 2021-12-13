import { ADD_MESSAGE, DELETE_MESSAGE, TOGGLE_MESSAGE_READED } from './actions'
import { IAction, IMessage } from '../../interfaces'

const initialState = {
  messages: <IMessage[]>[]
}

export const messagesReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
      }
    case DELETE_MESSAGE:
      return {
        ...state,
      }
    case TOGGLE_MESSAGE_READED:
      return {
        ...state,
      }
    default:
      return state
  }
}