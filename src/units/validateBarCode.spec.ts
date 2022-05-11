import { validateBarCode } from '../shared/utils/validateBarCode';

describe('ValidateBarCode testing', () => {
  test('validateBarCode test of digitable line of 47 characters, it should return true', () => {
    expect(
      validateBarCode('21299758700000020000001121100012100447561740', 47),
    ).toBe(true);
  });
  test('validateBarCode test of digitable line of 48 characters, it should return true', () => {
    expect(
      validateBarCode('84650000001435900240200240500024384221010811', 48),
    ).toBe(true);
  });
});
