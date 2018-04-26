/**
 * This is used in resolvers index.ts file
 */
export type Resolvers = {
  Mutation: {
    [resolver: string]: (source: any, args: Payload, context: any, info: any) => any
  }
}

/**
 * This is used in resolver and dynamo-repository, rename to MyEntityName
 */
export type EntityType = {

}

/**
 * This is the resolver payload type, rename to MyResolverPayload
 */
export type Payload = {
  id: string
}