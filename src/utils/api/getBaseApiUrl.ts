export const getBaseApiUrl = (query = '', limit = 3) => {
  const queryPart = query && `/search?q=${query}`;
  const limitPart = limit && `${query ? '&' : '?'}limit=${limit}`;

  return `https://api.artic.edu/api/v1/artworks${queryPart}${limitPart}`;
};
