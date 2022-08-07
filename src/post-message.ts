import { Message, MessageResult } from './types'
import { post } from './infrastructure'

export const postMessage = (
  message: Message,
  deps = { post }
): MessageResult => {
  const { id, thread } = deps.post(message.text, message.userId)

  return { id, thread, status: 'active' }
}
