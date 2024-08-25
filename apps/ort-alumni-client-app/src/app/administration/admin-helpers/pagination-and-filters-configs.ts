export interface IPagination {
  page: number;
  pageSize: number;
}

export interface IPaginationByKeyFilter extends IPagination {
  key: string;
}

export const PaginationKeyFilterInitialization:IPaginationByKeyFilter = {
  page: 1,
  pageSize: 10,
  key: '',
};

export interface IUserTotalPgn<T> {
  users:T[];
  total: number;
}