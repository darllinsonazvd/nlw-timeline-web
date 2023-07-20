import { cookies } from 'next/headers'
import { User } from '@/app/models/user.model'
import decode from 'jwt-decode'

export function getUser(): User {
  const token = cookies().get('token')?.value

  if (!token) {
    throw new Error('Unauthenticated.')
  }

  const user: User = decode(token)

  return user
}
