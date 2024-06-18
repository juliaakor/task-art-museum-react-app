import { Card } from '@components/Card';
import { CardList } from '@components/CardList';
import { ErrorBoundary } from '@components/ErrorBoundary';
import { ErrorLayout } from '@components/ErrorLayout';
import { Footer } from '@components/Footer';
import * as index from '@components/index';
import { Loader } from '@components/Loader';
import { Menu } from '@components/Menu';
import { Modal } from '@components/Modal';
import { Navbar } from '@components/Navbar';
import { Overview } from '@components/Overview';
import { Pagination } from '@components/Pagination';
import { Search } from '@components/Search';
import { SearchToolbar } from '@components/SearchToolbar';
import { Section } from '@components/Section';

describe('components folder index file exports', () => {
  it('should export Card from index', () => {
    expect(index.Card).toBe(Card);
  });

  it('should export CardList from index', () => {
    expect(index.CardList).toBe(CardList);
  });

  it('should export ErrorBoundary from index', () => {
    expect(index.ErrorBoundary).toBe(ErrorBoundary);
  });

  it('should export ErrorLayout from index', () => {
    expect(index.ErrorLayout).toBe(ErrorLayout);
  });

  it('should export Footer from index', () => {
    expect(index.Footer).toBe(Footer);
  });

  it('should export Loader from index', () => {
    expect(index.Loader).toBe(Loader);
  });

  it('should export Menu from index', () => {
    expect(index.Menu).toBe(Menu);
  });

  it('should export Modal from index', () => {
    expect(index.Modal).toBe(Modal);
  });

  it('should export Navbar from index', () => {
    expect(index.Navbar).toBe(Navbar);
  });

  it('should export Overview from index', () => {
    expect(index.Overview).toBe(Overview);
  });

  it('should re-export Pagination from index', () => {
    expect(index.Pagination).toBe(Pagination);
  });

  it('should export Search from index', () => {
    expect(index.Search).toBe(Search);
  });

  it('should export SearchToolbar from index', () => {
    expect(index.SearchToolbar).toBe(SearchToolbar);
  });

  it('should export Section from index', () => {
    expect(index.Section).toBe(Section);
  });
});
