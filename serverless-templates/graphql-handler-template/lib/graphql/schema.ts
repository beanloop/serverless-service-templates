import {makeExecutableSchema} from 'graphql-tools'
import {resolvers} from './resolvers/index'

const typeDefs = `

type Mutation {
  
}

schema {
  mutation: Mutation
}
`

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  logger: console,
})