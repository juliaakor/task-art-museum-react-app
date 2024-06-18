import { API } from '@constants/api';

export function getBaseApiUrl(query = '', limit = 3) {
  const queryPart = query && `/search?q=${query}`;
  const limitPart = limit && `${query ? '&' : '?'}limit=${limit}`;
  const fields = '&fields=id,title,is_public_domain,timestamp,image_id,artist_title,date_start';

  return `${API.baseURL}${queryPart}${limitPart}${fields}`;
}
