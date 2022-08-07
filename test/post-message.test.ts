import { describe, expect, it } from 'vitest';
import { postMessage } from '../src/post-message';
import { MessageResult } from '../src/types';

describe('post-message', () => {
  it('happy path', () => {
    const expected: MessageResult = {
      id: '123',
      thread: '-',
      status: 'active',
    };
    const actual = postMessage(
      { id: 'test', text: 'My Message', userId: '1' },
      { post: () => ({ id: '123', thread: '-' }) }
    );
    expect(actual).toStrictEqual(expected);
  });

  it('unverified user posts message', () => {
    expect(() =>
      postMessage({
        id: 'id',
        text: 'not verified',
        userId: '2',
      })
    ).toThrowError(Error('User not verified'));
  });
});
