import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { RoomsService } from './rooms.service';
import { RoomsResolver } from './rooms.resolver';
import { Room, RoomSchema } from './schemas/room.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Room.name, schema: RoomSchema }])],
  providers: [RoomsResolver, RoomsService]
})
export class RoomsModule {}


// export MongooseModule
