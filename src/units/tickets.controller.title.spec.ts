import { Test, TestingModule } from '@nestjs/testing';
import { Ticket } from '../domain/modules/entities/ticket';
import { GetTicket } from '../domain/modules/usecases/getTickets';
import { TicketController } from '../presentation/tickets.controller';

const ticketTitle: Ticket = new Ticket({
  amount: '20.00',
  expirationDate: '2018-07-16',
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
            barCode: jest.fn().mockReturnValue(ticketTitle),
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

  describe('Title testing return', () => {
    it('If barCode has 47 characters, should return amount, expirationDate and barCode', async () => {
      const result = await ticketController.ticket(
        '21290001192110001210504475617405975870000002000',
      );

      expect(result).toEqual(ticketTitle);
      expect(getTicket.barCode).toHaveBeenCalledTimes(1);
      expect(getTicket.barCode).toHaveBeenCalledWith(
        '21290001192110001210504475617405975870000002000',
      );
    });
  });
});
