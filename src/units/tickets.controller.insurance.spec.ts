import { Test, TestingModule } from '@nestjs/testing';
import { Ticket } from '../domain/modules/entities/ticket';
import { GetTicket } from '../domain/modules/usecases/getTickets';
import { TicketController } from '../presentation/tickets.controller';

const ticketInsurance: Ticket = new Ticket({
  amount: '119211.00',
  expirationDate: undefined,
  barCode: '21299758700000020000001121100012100447561740',
});

describe('TicketController', () => {
  let ticketController: TicketController;
  let getTicket: GetTicket;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TicketController],
      providers: [
        {
          provide: GetTicket,
          useValue: {
            barCode: jest.fn().mockReturnValue(ticketInsurance),
          },
        },
      ],
    }).compile();

    ticketController = module.get<TicketController>(TicketController);
    getTicket = module.get<GetTicket>(GetTicket);
  });

  it('should be defined', () => {
    expect(ticketController).toBeDefined();
    expect(getTicket).toBeDefined();
  });

  describe('Insurance testing return', () => {
    it('If barCode has 48 characters, should return amount and barCode', async () => {
      const result = await ticketController.ticket(
        '212900011921100012105044756174059758700000020000',
      );

      expect(result).toEqual(ticketInsurance);
      expect(getTicket.barCode).toHaveBeenCalledTimes(1);
      expect(getTicket.barCode).toHaveBeenCalledWith(
        '212900011921100012105044756174059758700000020000',
      );
    });
  });
});
