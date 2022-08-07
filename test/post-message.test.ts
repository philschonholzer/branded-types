import { describe, expect, it } from 'vitest';
import { make } from '../src/newtype';
import { postMessage } from '../src/post-message';
import { Message, MessageResult, User } from '../src/types';

describe('post-message', () => {
  it('happy path', () => {
    const expected: MessageResult = {
      id: make<MessageResult['id']>('123'),
      thread: '-',
      status: 'active',
    };
    const actual = postMessage(
      {
        id: make<Message['id']>('test'),
        text: 'My Message',
        userId: make<User['id']>('1'),
      },
      { post: () => ({ id: make<MessageResult['id']>('123'), thread: '-' }) }
    );
    expect(actual).toStrictEqual(expected);
  });

  it('unverified user posts message', () => {
    expect(() =>
      postMessage({
        id: make<Message['id']>('id'),
        text: 'not verified',
        userId: make<User['id']>('2'),
      })
    ).toThrowError(Error('User not verified'));
  });
});
