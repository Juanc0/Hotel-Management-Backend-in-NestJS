import { CreateRoomInput } from './create-room.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { states, defaultState } from '../common/enums';

@InputType()
export class UpdateRoomInput extends PartialType(CreateRoomInput) {
  
  @Field(() => String)
  roomId: string;

  @Field(() => String, { description: 'Name of the Guest', nullable: true})
  guestName: string;
  
  @Field(() => String, { nullable: true})
  state?: {
    type: string,
    enum : states,
    default: 'FREE' // TODO: defaultState
  };
}
