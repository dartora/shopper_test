import { Test, TestingModule } from '@nestjs/testing';
import { DriversController } from './drivers.controller';
import { describe, expect, it, beforeEach } from '@jest/globals';

describe('DriversController', () => {
  let controller: DriversController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DriversController],
    }).compile();

    controller = module.get<DriversController>(DriversController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
