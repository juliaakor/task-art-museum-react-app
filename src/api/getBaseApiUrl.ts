import { API } from '@constants/api';

export function getBaseApiUrl(query = '', limit = 3) {
  const queryPart = query && `/search?q=${query}`;
  const limitPart = limit && `${query ? '&' : '?'}limit=${limit}`;

  return `${API.baseURL}${queryPart}${limitPart}`;
}
