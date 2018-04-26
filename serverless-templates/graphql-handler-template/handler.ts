import {APIGatewayEvent, Callback, Context, Handler} from 'aws-lambda'
import {graphiqlLambda, graphqlLambda} from 'apollo-server-lambda'
import {schema} from './lib/graphql/schema'

const handler = graphqlLambda({schema, tracing: true})

export const graphqlHandler = async (
  event: APIGatewayEvent,
  context: Context,
  callback: Callback,
) => handler(event, context, callback)

export const graphiqlHandler = graphiqlLambda({
  endpointURL: '/dev/graphql',
})