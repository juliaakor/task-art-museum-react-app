import { ROUTES } from '@constants/routes';
import { DetailInfoPage, ErrorPage, FavoritesPage, HomePage, NotFoundPage } from '@pages/index';

export const router = [
  {
    Component: HomePage,
    path: ROUTES.HOME,
  },
  {
    Component: FavoritesPage,
    path: ROUTES.FAVORITES,
  },
  {
    Component: DetailInfoPage,
    path: ROUTES.DETAIL_INFO,
  },
  {
    Component: NotFoundPage,
    path: ROUTES.NOT_FOUND,
  },
  {
    Component: ErrorPage,
    path: ROUTES.ERROR_OCCURRED,
  },
];
