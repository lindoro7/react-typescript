export interface IMessage {
  id: string
  title: string
  author: string
  readed: boolean
  isAnswered: boolean
  chatID: string
}

export interface IChat {
  id: string
  theme: string
}

