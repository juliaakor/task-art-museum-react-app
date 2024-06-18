import { getPaintingDetailsByIdUrl } from '@api/getPaintingDetailsByIdUrl';
import { API } from '@constants/api';

describe('getPaintingDetailsByIdUrl', () => {
  test('should return correct URL with valid id param', () => {
    const result = getPaintingDetailsByIdUrl('123');
    expect(result).toBe(`${API.baseURL}/123`);
  });

  test('should return URL with undefined id param', () => {
    const result = getPaintingDetailsByIdUrl(undefined);
    expect(result).toBe(`${API.baseURL}/undefined`);
  });

  test('should return URL with empty string param', () => {
    const result = getPaintingDetailsByIdUrl('');
    expect(result).toBe(`${API.baseURL}/`);
  });
});
