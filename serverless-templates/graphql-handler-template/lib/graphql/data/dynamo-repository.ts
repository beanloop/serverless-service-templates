import {dynamoClient} from '../data/dynamo-db'
import {PutItemOutput} from 'aws-sdk/clients/dynamodb'
import {AWSError} from 'aws-sdk'
import {EntityType} from '../../entities'

export const insert = ({

}: EntityType): Promise<EntityType | AWSError> => 
  dynamoClient
    .put({
      TableName: 'Events',
      Item: {

        eventName: 'EventName',
        data: JSON.stringify({

        }),
      },
      ReturnValues: 'ALL_OLD',
      ReturnConsumedCapacity: 'TOTAL'
    })
    .promise()
    .then((output: PutItemOutput) => ({ }))
    .catch((error: AWSError) => (console.log('error: ', error), error))