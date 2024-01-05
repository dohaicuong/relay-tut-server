import { createPost } from "../../services/post";
import { builder } from "../builder";
import { PostRef } from "./model_post";

builder.relayMutationField(
  'postCreate',
  {
    inputFields: t => ({
      title: t.string({ required: true }),
      content: t.string({ required: true }),
    })
  },
  {
    resolve: async (_, { input }) => {
      return createPost(
        input.title,
        input.content
      )
    }
  },
  {
    outputFields: t => ({
      post: t.field({
        type: PostRef,
        resolve: post => post
      })
    })
  }
)
