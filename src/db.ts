import { v4 as uuid } from 'uuid'

export const FakeDB = {
  chats: [
    {
      'id': uuid(),
      'theme': 'Some theme 1',
    },
    {
      'id': uuid(),
      'theme': 'Some theme 2',
    },
    {
      'id': uuid(),
      'theme': 'Some theme 3',
    },
    {
      'id': uuid(),
      'theme': 'Some theme 4 Some theme 4 Some theme 4 Some theme 4 Some theme 4 Some theme 4 ',
    },
    {
      'id': uuid(),
      'theme': 'Some theme 5',
    }
  ]
}