import { Message, MessageResult, User } from './types';
import { post } from './infrastructure';
import { users } from './users';

export const postMessage = (
  message: Message,
  deps = { post }
): MessageResult => {
  const user = users.find((user) => user.id === message.id);
  if (!user) {
    throw Error('User not found');
  }
  if (user.verificationStatus === 'unverified') {
    throw Error('User not verified');
  }
  const { id, thread } = deps.post(message.text, message.id);

  return { id, thread, status: 'active' };
};
