import { fetchData } from '@api/fetchData';
import { getBaseApiUrl } from '@api/getBaseApiUrl';
import { getPaintingDetailsByIdUrl } from '@api/getPaintingDetailsByIdUrl';
import { getPaintingImageUrl } from '@api/getPaintingImageUrl';
import * as index from '@api/index';

describe('api folder index file exports', () => {
  it('should export fetchData from index', () => {
    expect(index.fetchData).toBe(fetchData);
  });

  it('should export getBaseApiUrl from index', () => {
    expect(index.getBaseApiUrl).toBe(getBaseApiUrl);
  });

  it('should export getPaintingDetailsByIdUrl from index', () => {
    expect(index.getPaintingDetailsByIdUrl).toBe(getPaintingDetailsByIdUrl);
  });

  it('should export getPaintingImageUrl from index', () => {
    expect(index.getPaintingImageUrl).toBe(getPaintingImageUrl);
  });
});
