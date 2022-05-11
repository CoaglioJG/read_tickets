import { getAmount } from '../shared/utils/getAmount';

describe('GetAmount testing', () => {
  test(`getAmount test with 47 characters and value 21290001192110001210504475617405975870000002000, should return amount = ${20.0}`, () => {
    expect(
      getAmount('21290001192110001210504475617405975870000002000', 47),
    ).toBe('20.00');
  });
  test(`getAmount test with 48 characters and value 212900011921100012105044756174059758700000020000, should return ${119211.0}`, () => {
    expect(
      getAmount('212900011921100012105044756174059758700000020000', 48),
    ).toBe('119211.00');
  });
});
