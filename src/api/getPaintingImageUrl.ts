import { API } from '@constants/api';

export const getPaintingImageUrl = (id: string) => `${API.baseImageURL}${id}/full/843,/0/default.jpg`;
