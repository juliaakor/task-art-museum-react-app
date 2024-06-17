import { API } from '@constants/api';

export function getPaintingImageUrl(id: string) {
  return `${API.baseImageURL}${id}/full/843,/0/default.jpg`;
}
