export type Post = {
  id: number
  title: string
  content: string

  __typename: 'Post'
}

export let posts: Post[] = [
  { id: 1, title: '1st Post', content: 'Some content', __typename: 'Post' },
  { id: 2, title: '2nd Post', content: 'Some content', __typename: 'Post' },
  { id: 3, title: '3rd Post', content: 'Some content', __typename: 'Post' },
  { id: 4, title: '4th Post', content: 'Some content', __typename: 'Post' },
  { id: 5, title: '5th Post', content: 'Some content', __typename: 'Post' },
  { id: 6, title: '6th Post', content: 'Some content', __typename: 'Post' },
]

export const createPost = (title: string, content: string) => {
  const newPost: Post = {
    title,
    content,
    __typename: 'Post',
    id: posts.length + 1
  }

  posts.push(newPost)

  return newPost
}

export const deletePost = (id: number) => {
  const deletedPost = posts.find(post => id === post.id)
  if (!deletedPost) return null

  posts = posts.filter(post => id !== post.id)

  return deletedPost
}
