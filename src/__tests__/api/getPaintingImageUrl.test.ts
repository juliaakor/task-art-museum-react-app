import { getPaintingImageUrl } from '@api/getPaintingImageUrl';
import { API } from '@constants/api';

describe('getPaintingImageUrl', () => {
  test('should return correct URL with valid id param', () => {
    const result = getPaintingImageUrl('123456789');
    expect(result).toBe(`${API.baseImageURL}123456789/full/843,/0/default.jpg`);
  });

  test('should return correct URL with empty string id param', () => {
    const result = getPaintingImageUrl('id');
    expect(result).toBe(`${API.baseImageURL}id/full/843,/0/default.jpg`);
  });

  test('should return correct URL with null string id param', () => {
    const result = getPaintingImageUrl('null');
    expect(result).toBe(`${API.baseImageURL}null/full/843,/0/default.jpg`);
  });
});
