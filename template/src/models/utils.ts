export type SelectorOption<T extends unknown = unknown> = {
  label: string;
  value: T;
};

export type PaginatedResponse<T extends unknown> = {
  page: number;
  totalItems: number;
  hasNextPage: boolean;
  totalPages: number;
  items: T[];
};

export type DBDocument = {
  createdAt: string;
  updatedAt: string;
  _id: string;
};
