import { Post, posts } from "../../services/post";
import { builder } from "../builder";

export const PostRef = builder.objectRef<Post>('Post')
builder.node(PostRef, {
  id: { resolve: post => post.id },
  fields: t => ({
    title: t.exposeString('title'),
    content: t.exposeString('content'),
  }),
  loadOne: id => posts.find(post => id === post.id.toString()),
  loadMany: ids => posts.filter(post => ids.includes(post.id.toString()))
})
