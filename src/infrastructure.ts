import { make } from "./newtype";
import { MessageResult, User } from "./types";

export const post = (message: string, userId: User['id']) => ({ id: make<MessageResult['id']>(''), thread: '' });
