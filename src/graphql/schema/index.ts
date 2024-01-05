import { builder } from '../builder'

builder.queryType()
builder.mutationType()

export const schema = builder.toSchema()

import './error'

import './model_post'
import './query_posts'
import './mutation_postCreate'
import './mutation_postDelete'
