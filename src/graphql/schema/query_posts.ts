import { resolveOffsetConnection } from "@pothos/plugin-relay";
import { builder } from "../builder";
import { PostRef } from "./model_post";
import { posts } from "../../services/post";

const QueryPostConnectionFilterRef = builder.inputType('QueryPostConnectionFilter', {
  fields: t => ({
    title: t.string()
  })
})

builder.queryField('posts', t => {
  return t.connection(
    {
      type: PostRef,
      args: {
        where: t.arg({ type: QueryPostConnectionFilterRef })
      },
      resolve: (_, { where, ...args }) => {
        return resolveOffsetConnection({ args }, ({ limit, offset }) => {
          let results = posts

          if (where?.title) {
            results = posts
              .filter(post => post.title.includes(where.title as string))
          }

          return results.slice(offset, offset + limit)
        })
      }
    }
  )
})
