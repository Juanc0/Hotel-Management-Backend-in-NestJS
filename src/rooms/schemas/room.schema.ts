import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { states, defaultState } from '../common/enums'

export type RoomDocument = HydratedDocument<Room>;

@Schema()
export class Room {
    @Prop()
    roomId: string;

    @Prop()
    guestName: String; // Name of the Guest

    @Prop({default: Date})
    lastChanged: Date; // Time of the last change

    @Prop({enum : states, default: defaultState})
    state?: string
}

export const RoomSchema = SchemaFactory.createForClass(Room);


