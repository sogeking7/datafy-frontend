export type SuccessResponse<T> = {
  success: true;
  data: T;
};

export type ErrorResponse = {
  success: false;
  data: string;
};

export type Response<T> = SuccessResponse<T> | ErrorResponse;

export type Find<T> = (params?: {
  sort?: string;
  where?: Object;
  limit?: number;
  page?: number;
}) => Promise<Response<T[]>>;

export type FindResponse<T> = {
  docs: T[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
  prevPage: null | number;
  nextPage: null | number;
};

export type FindById<T> = (id: number | string) => Promise<Response<T>>;

export type FindByIdResponse<T> = T;

export type Create<T> = (
  body: Partial<T>
) => Promise<Response<T>>;

export type CreateResponse<T> = {
  message: string;
  doc: T;
};

export type UpdateById<T> = (
  id: number | string,
  body: Partial<T>
) => Promise<Response<T>>;

export type UpdateByIdResponse<T> = {
  doc: T;
  message: string;
};

export type DeleteById<T> = (id: number | string) => Promise<Response<T>>;

export type DeleteByIdResponse<T> = T;
