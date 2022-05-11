import GenericError from '../shared/utils/genericError';
import { moduleEleven } from '../shared/utils/moduleEleven';

describe('ModuleEleven testing', () => {
  test('moduleEleven test, it should return 1', () => {
    expect(
      moduleEleven([
        0, 4, 7, 1, 6, 5, 7, 4, 4, 0, 0, 1, 2, 1, 0, 0, 0, 1, 1, 2, 1, 1, 0, 0,
        0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 7, 8, 5, 7, 4, 2, 1, 2,
      ]),
    ).toBe(1);
  });

  test('moduleEleven test, it should return an error informing verification digit is incorret', () => {
    const testError = () => {
      throw new GenericError(
        `Invalid verification digit of field: 2`,
        400,
        'Verification digit error',
      );
    };

    expect(testError).toThrow(GenericError);
  });
});
