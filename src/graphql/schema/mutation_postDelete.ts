import { encodeGlobalID } from "@pothos/plugin-relay";
import { deletePost } from "../../services/post";
import { builder } from "../builder";
import { PostRef } from "./model_post";
import { ErrorInterface } from "./error";

class PostNotExistError extends Error {
  globalId: string

  constructor(globalId: string) {
    super(`Post with id ${globalId} does not exist`)

    this.globalId = globalId
  }
}
builder.objectType(PostNotExistError, {
  name: 'PostNotExistError',
  interfaces: [ErrorInterface],
  fields: (t) => ({
    id: t.exposeString('globalId')
  }),
})

builder.relayMutationField(
  'postDelete',
  {
    inputFields: t => ({
      id: t.globalID({ required: true })
    })
  },
  {
    errors: {
      types: [PostNotExistError]
    },
    resolve: async (_, { input }) => {
      const deletedPost = deletePost(parseInt(input.id.id))
      if (!deletedPost) {
        throw new PostNotExistError(
          encodeGlobalID(input.id.typename, input.id.id)
        )
      }

      return deletedPost
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
