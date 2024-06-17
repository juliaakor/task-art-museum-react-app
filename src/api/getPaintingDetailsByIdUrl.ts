import { API } from '@constants/api';

export function getPaintingDetailsByIdUrl(id: string | undefined) {
  return `${API.baseURL}/${id}`;
}
