export interface PaintingCardInfoType {
  artist_title: string;
  id: number;
  image_id: string;
  is_public_domain: boolean;
  title: string;
}

export interface PaginationInfoType {
  current_page: number;
  limit: number;
  next_url: string;
  offset: number;
  total: number;
  total_pages: number;
}

export interface PaintingsListType {
  data: Array<PaintingCardInfoType>;
  isFullSize?: boolean;
  pagination: PaginationInfoType;
  query?: string;
}
