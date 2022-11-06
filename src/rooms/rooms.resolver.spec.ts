import { Test, TestingModule } from '@nestjs/testing';
import { RoomsResolver } from './rooms.resolver';
import { RoomsService } from './rooms.service';

import { CreateRoomInput } from './dto/create-room.input';



describe('RoomsResolver', () => {
  let resolver: RoomsResolver;

  beforeEach(async () => {  
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoomsResolver, RoomsService],
    }).compile();

    resolver = module.get<RoomsResolver>(RoomsResolver);
  });

  // it('should be defined', () => {
  //   expect(resolver).toBeDefined();
  // });


  describe('createRoom', () => {
    it('Should return inserted room', async () => {
      const result = {

      };
      const createRoomInput = new CreateRoomInput();
      createRoomInput.roomId = 'X';
      createRoomInput.guestName = 'First room';
      console.log({createRoomInput})

      // jest.spyOn(roomsService, 'findAll').mockImplementation(() => result);

      const createdRoom = await resolver.createRoom(createRoomInput)
      console.log({createdRoom})

      expect(createdRoom).toBe(result);
    });
  });
});
