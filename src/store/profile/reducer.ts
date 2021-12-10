import { TOGGLE_SHOW_NAME } from './actions'
import { IAction } from '../../interfaces'

const initialState = {
  showName: false,
  name: 'Default'
}

export const profileReducer = (state = initialState, action: IAction) => {
  switch (action.type) {
    case TOGGLE_SHOW_NAME:
      return {
        ...state,
        showName: !state.showName
      }
    default:
      return state
  }
}