import { v4 as uuid } from 'uuid'

export const FakeDB = {
  chats: [
    {
      'id': uuid(),
      'theme': 'Some theme 1',
      'messages': [],
    },
    {
      'id': uuid(),
      'theme': 'Some theme 2',
      'messages': [],
    },
    {
      'id': uuid(),
      'theme': 'Some theme 3',
      'messages': [],
    },
    {
      'id': uuid(),
      'theme': 'Some theme 4 Some theme 4 Some theme 4 Some theme 4 Some theme 4 Some theme 4 ',
      'messages': [],
    },
    {
      'id': uuid(),
      'theme': 'Some theme 5',
      'messages': [],
    }
  ]
}