import { Test } from '@nestjs/testing';
import { CardsService } from './cards.service';

describe('CardsService', () => {
  let service: CardsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CardsService],
    }).compile();

    service = module.get(CardsService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
