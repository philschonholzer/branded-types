import { make } from './newtype'
import { User, VerifiedUser } from './types'

export const verifyUser = (user: User) => {
  // not inplemented
  return make<VerifiedUser>(user)
}
