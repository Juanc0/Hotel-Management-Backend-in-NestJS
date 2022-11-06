import { InputType, Int, Field } from '@nestjs/graphql';
import { states, defaultState } from '../common/enums';

@InputType()
export class CreateRoomInput {
  @Field(() => String)
  roomId: string;

  @Field(() => String, { description: 'Name of the Guest' })
  guestName: string;
  
  @Field(() => String, { nullable: true})
  state?: {
    type: string,
    enum : states,
    default: 'FREE' // TODO: defaultState
  };

}
