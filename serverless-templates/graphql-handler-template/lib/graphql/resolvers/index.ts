import {myResolver} from './my-resolver'
import {Resolvers} from '../../entities'

export const resolvers = {
  Mutation: {
    myResolver
  },
} as Resolvers
