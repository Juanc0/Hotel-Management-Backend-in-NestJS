import { ObjectType, Field, Int, GraphQLISODateTime} from '@nestjs/graphql';
import { states, defaultState } from '../common/enums'

@ObjectType()
export class Room {
  @Field(() => String)
  roomId: string;

  @Field(() => String, { description: 'Name of the Guest' })
  guestName: string;

  @Field(() => GraphQLISODateTime, { description: 'Time of the last change' })
  lastChanged: Date;

  @Field(() => String)
  state?: {
    type: string,
    enum : states,
    default: 'FREE' // TODO: defaultState
  };
}

