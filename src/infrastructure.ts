import { make } from './newtype'
import { MessageResult, VerifiedUser } from './types'

export const post = (message: string, userId: VerifiedUser['id']) => ({
  id: make<MessageResult['id']>(''),
  thread: '',
})
