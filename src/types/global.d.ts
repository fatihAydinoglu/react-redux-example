// Api types
interface UserBase {
  username: string
  name: string
}

interface User extends UserBase {
  id: number
}

interface BlogPostBase {
  title: string
  body: string
  userId: number
}

interface BlogPost extends BlogPostBase {
  id: number
}

interface BlogPostExpandedUser extends BlogPost {
  user: User
}

interface CommentBase {
  body: string
  postId: number
  userId: number
}

interface CommentType extends CommentBase {
  id: number
}

interface CommentExpandedUser extends CommentType {
  user: User
}

// Common Types
type ImmutablePrimitive =
  | undefined
  | null
  | boolean
  | string
  | number
  // tslint:disable-next-line:ban-types
  | Function

type Immutable<T> = T extends ImmutablePrimitive
  ? T // tslint:disable-next-line:array-type
  : T extends Array<infer U>
  ? ImmutableArray<U>
  : T extends Map<infer K, infer V>
  ? ImmutableMap<K, V>
  : T extends Set<infer M>
  ? ImmutableSet<M>
  : ImmutableObject<T>

type ImmutableArray<T> = ReadonlyArray<Immutable<T>>
type ImmutableMap<K, V> = ReadonlyMap<Immutable<K>, Immutable<V>>
type ImmutableSet<T> = ReadonlySet<Immutable<T>>
type ImmutableObject<T> = { readonly [K in keyof T]: Immutable<T[K]> }
