import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'; 
import { Room, RoomDocument } from './schemas/room.schema';
import { CreateRoomInput } from './dto/create-room.input';
import { UpdateRoomInput } from './dto/update-room.input';



@Injectable()
export class RoomsService {
  constructor(@InjectModel('Room') private roomModel: Model<RoomDocument>) {}

  async create(createRoomInput: CreateRoomInput): Promise<Room> {
    const creeatedRoom = new this.roomModel(createRoomInput);
    return creeatedRoom.save();
  }

  async findAll(): Promise<Room[]> {
    return this.roomModel.find().exec()
  }

  async findOne(roomId: string): Promise<Room> {
    return this.roomModel.findOne({roomId:roomId}).exec()
  }

  async update(roomId: string, updateRoomInput: UpdateRoomInput)  {
    await this.roomModel.updateOne({roomId:roomId},{$set:updateRoomInput}).exec()
    return this.findOne(roomId);
  }

  async remove(roomId: string) {
    const toRemoveRoom = await this.findOne(roomId)
    this.roomModel.deleteOne({roomId:roomId}).exec()
    return toRemoveRoom;
  }
}
