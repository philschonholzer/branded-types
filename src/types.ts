import { NewType } from './newtype'

export type User = {
  id: NewType<'User Id', string>
  name: string
}

export type VerifiedUser = NewType<
  'Verified User',
  User & { id: NewType<'Verified User Id', User['id']> }
>

export type Message = {
  id: NewType<'Message Id', string>
  text: string
  userId: VerifiedUser['id']
}

export type MessageResult = {
  id: NewType<'Message Result Id', string>
  thread: string
  status: 'active' | 'deleted'
}
