import { API } from '@constants/api';

export const getPaintingDetailsByIdUrl = (id: string | undefined) => `${API.baseURL}/${id}`;
