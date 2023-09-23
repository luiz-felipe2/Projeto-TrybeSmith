export type ServiceResponseError = {
  status: 'BAD_REQUEST' | 'NOT_FOUND' | 'UNAUTHORIZED' | 'UNPROCESSABLE',
  data: { message: string }
};

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL' | 'CREATED',
  data: T
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;