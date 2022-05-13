import { Title } from '../domain/modules/tickets/types/title/title';

describe('Title testing', () => {
  test('If boleto is valid with a 47 digit digitable line, this test should return amount and barCode', async () => {
    const b = new Title();
    const ticket = '21290001192110001210504475617405975870000002000';
    const size = ticket.length;

    const data = await b.call(ticket, size);

    expect(data).toStrictEqual({
      amount: '20.00',
      barCode: '21299758700000020000001121100012100447561740',
      expirationDate: '2018-07-16',
    });
  });
});
