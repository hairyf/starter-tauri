import type { ColumnType } from 'kysely'

export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>
export type Timestamp = ColumnType<Date, Date | string, Date | string>

export interface Post {
  id: Generated<number>
  createdAt: Generated<string>
  updatedAt: string
  title: string
  content: string | null
  published: Generated<number>
  authorId: number
}
export interface Profile {
  id: Generated<number>
  bio: string | null
  userId: number
}
export interface User {
  id: Generated<number>
  email: string
  name: string | null
}
export interface DB {
  post: Post
  profile: Profile
  user: User
}
