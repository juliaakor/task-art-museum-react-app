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

export interface FullPaintingInfo {
  artist_display: string;
  artist_title: string;
  credit_line: string;
  date_display: string;
  dimensions: string;
  dimensions_detail: string;
  gallery_title: string;
  id: string;
  is_public_domain: boolean;
  place_of_origin: string;
  title: string;
}

export interface PaintingsListType {
  key?: React.Key | null | undefined;
  data: Array<PaintingCardInfoType>;
  isFullSize?: boolean;
  pagination: PaginationInfoType;
  query?: string;
}
