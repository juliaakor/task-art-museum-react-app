import * as Yup from 'yup';

const isRequiredString = Yup.string().required().nullable();
const isRequiredBoolean = Yup.boolean().required();
const isRequiredNumber = Yup.number().required().nullable();

export const artworkShortSchema = Yup.object().shape({
  artist_title: isRequiredString,
  id: isRequiredNumber,
  image_id: isRequiredString,
  is_public_domain: isRequiredBoolean,
  title: isRequiredString,
});

export const PaginationInfoSchema = Yup.object().shape({
  current_page: isRequiredNumber,
  limit: isRequiredNumber,
  next_url: isRequiredString.optional(),
  offset: isRequiredNumber,
  total: isRequiredNumber,
  total_pages: isRequiredNumber,
});

export const PaintingsListSchema = Yup.object().shape({
  data: Yup.array(artworkShortSchema),
  pagination: PaginationInfoSchema,
});

export const FullPaintingInfoSchema = Yup.object().shape({
  alt_image_ids: Yup.array(isRequiredString.nonNullable()),
  artist_display: isRequiredString,
  artist_title: isRequiredString,
  credit_line: isRequiredString,
  date_start: isRequiredNumber,
  dimensions: isRequiredString,
  gallery_title: isRequiredString,
  id: isRequiredString,
  image_id: isRequiredString,
  is_public_domain: isRequiredBoolean,
  place_of_origin: isRequiredString,
  title: isRequiredString,
});

export const PaintingsDetailsSchema = Yup.object().shape({
  data: FullPaintingInfoSchema,
});

export const searchArtworkSchema = Yup.object().shape({
  artist_title: isRequiredString.optional(),
  id: isRequiredNumber,
  image_id: isRequiredString.optional(),
  is_public_domain: isRequiredBoolean.optional(),
  title: isRequiredString.optional(),
});

export const searchArtworkListSchema = Yup.object().shape({
  data: Yup.array(searchArtworkSchema),
  pagination: PaginationInfoSchema,
});

export type FullPaintingInfoType = Yup.InferType<typeof FullPaintingInfoSchema>;
