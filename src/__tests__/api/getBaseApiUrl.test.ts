import { getBaseApiUrl } from '@api/getBaseApiUrl';
import { API } from '@constants/api';

const fields = '&fields=id,title,is_public_domain,timestamp,image_id,artist_title,date_start';

describe('getBaseApiUrl', () => {
  test('should return base URL with default params', () => {
    const result = getBaseApiUrl();
    expect(result).toBe(`${API.baseURL}?limit=3${fields}`);
  });

  test('should return URL with query params', () => {
    const result = getBaseApiUrl('test');
    expect(result).toBe(`${API.baseURL}/search?q=test&limit=3${fields}`);
  });

  test('should return URL with limit params', () => {
    const result = getBaseApiUrl('', 5);
    expect(result).toBe(`${API.baseURL}?limit=5${fields}`);
  });

  test('should return URL with both query and limit params', () => {
    const result = getBaseApiUrl('test', 5);
    expect(result).toBe(`${API.baseURL}/search?q=test&limit=5${fields}`);
  });

  test('should return URL with query param as empty string', () => {
    const result = getBaseApiUrl('', 3);
    expect(result).toBe(`${API.baseURL}?limit=3${fields}`);
  });

  test('should return URL with limit param as 0', () => {
    const result = getBaseApiUrl('test');
    expect(result).toBe(`${API.baseURL}/search?q=test&limit=3${fields}`);
  });
});
