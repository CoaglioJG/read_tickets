import { Insurance } from '../domain/modules/tickets/types/insurance/insurance';

describe('Insurance testing', () => {
  test('If boleto is valid with a 48 digit digitable line, this test should return amount and barCode', async () => {
    const b = new Insurance();
    const ticket = '836200000021292600481009143530930013001904210760';
    const size = ticket.length;

    const data = await b.call(ticket, size);

    expect(data).toStrictEqual({
      amount: '212.92',
      barCode: '83620000002292600481001435309300100190421076',
    });
  });
});
