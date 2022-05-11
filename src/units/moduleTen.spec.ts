import GenericError from '../shared/utils/genericError';
import { moduleTen } from '../shared/utils/moduleTen';

describe('ModuleTen testing', () => {
  test('moduleTen test, it should return 6', () => {
    expect(moduleTen([2, 0, 0, 0, 0, 0, 0, 2, 6, 3, 8])).toBe(6);
  });

  test('moduleTen test, it should return an error informing verification digit is incorret', () => {
    const testError = () => {
      throw new GenericError(
        `Invalid verification digit of field: 1`,
        400,
        'Verification digit error',
      );
    };

    expect(testError).toThrow(GenericError);
  });
});
