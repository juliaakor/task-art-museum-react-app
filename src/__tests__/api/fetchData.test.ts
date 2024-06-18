import * as Yup from 'yup';

import { fetchData } from '@api/index';
import { API } from '@constants/api';
import { searchArtworkListSchema } from '@validation/index';

import mockData from './mock.json';
const fields = '&fields=id,title,is_public_domain,timestamp,image_id,artist_title,date_start';
global.fetch = jest.fn();

describe('fetchData', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it('fetches data successfully without validation', async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    const result = await fetchData({ url: `${API.baseURL}?limit=3&page=2${fields}` });
    expect(result).toEqual(mockData);
    expect(fetch).toHaveBeenCalledWith(`${API.baseURL}?limit=3&page=2${fields}`);
  });

  it('fetches data and validates it', async () => {
    const expectedData = await searchArtworkListSchema.validate(mockData, { stripUnknown: true });

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });

    const result = await fetchData({
      url: `${API.baseURL}/search?q=test&limit=3${fields}`,
      validationScheme: searchArtworkListSchema,
    });
    expect(result).toEqual(expectedData);
    expect(fetch).toHaveBeenCalledWith(`${API.baseURL}/search?q=test&limit=3${fields}`);
  });

  it('throws an error if validation fails', async () => {
    const validationScheme = Yup.object().shape({
      key: Yup.string().required(),
    });

    (fetch as jest.Mock).mockResolvedValueOnce({
      json: jest.fn().mockResolvedValueOnce(mockData),
    });
    try {
      await expect(fetchData({ url: `${API.baseURL}?limit=3${fields}`, validationScheme })).rejects.toThrow();
    } catch (error: unknown) {
      if (error instanceof Yup.ValidationError) {
        expect(fetch).toHaveBeenCalledWith(`${API.baseURL}?limit=3${fields}`);
        expect(error.name).toBe('ValidationError');
      } else {
        throw error;
      }
    }
  });

  it('throws an error if fetch fails', async () => {
    const errorMessage = 'Failed to fetch';
    (fetch as jest.Mock).mockRejectedValueOnce(new Error(errorMessage));

    await expect(fetchData({ url: 'https://api.failed-example.com/some-data' })).rejects.toThrow(errorMessage);
    expect(fetch).toHaveBeenCalledWith('https://api.failed-example.com/some-data');
  });
});
