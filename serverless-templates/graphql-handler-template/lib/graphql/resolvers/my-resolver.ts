import {AWSError} from 'aws-sdk';
import {v1 as uuidv1} from 'uuid'
import {insert} from '../data/dynamo-repository'
import {Payload, EntityType} from '../../entities'

export const myResolver = (
  _,
  {id}: Payload,
  context,
  info
): Promise<EntityType | AWSError> => insert({
    id,
  }
)