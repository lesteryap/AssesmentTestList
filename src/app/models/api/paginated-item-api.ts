import { ItemApi } from './item-api';

export class PaginatedItemApi {
  items?: ItemApi[];
  totalItems?: number;
  totalPages?: number;

  constructor(items?: ItemApi[], totalItems?: number, totalPages?: number) {
    this.items = items;
    this.totalItems = totalItems;
    this.totalPages = totalPages;
  }
}
