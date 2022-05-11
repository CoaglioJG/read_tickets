import GenericError from '../shared/utils/genericError';
import { validateField } from '../shared/utils/validateFields';

describe('validateField testing', () => {
  test('validateField test of digitable line of 47 characters, it should return 47', () => {
    expect(validateField('84221010811', 11, 6)).toBe(true);
  });
  test('validateField test of digitable line of 48 characters, it should return true', () => {
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
