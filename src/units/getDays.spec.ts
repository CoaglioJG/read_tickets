import { getDays } from '../shared/utils/getDays';

describe('GetDays testing', () => {
  test('should return "2018-07-16" for getDays(`1997-10-07`, 7587)', () => {
    expect(getDays('1997-10-07', 7587)).toBe('2018-07-16');
  });
});
