import { describe, expect, it } from 'vitest'
import { make } from '../src/newtype'
import { postMessage } from '../src/post-message'
import { Message, MessageResult } from '../src/types'
import { users } from '../src/users'
import { verifyUser } from '../src/verify-user'

describe('post-message', () => {
  it('happy path', () => {
    const expected: MessageResult = {
      id: make<MessageResult['id']>('123'),
      thread: '-',
      status: 'active',
    }
    const actual = postMessage(
      {
        id: make<Message['id']>('test'),
        text: 'My Message',
        userId: verifyUser(users[0]).id,
      },
      { post: () => ({ id: make<MessageResult['id']>('123'), thread: '-' }) }
    )
    expect(actual).toStrictEqual(expected)
  })
})
