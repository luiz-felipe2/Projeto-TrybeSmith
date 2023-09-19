export type ServiceResponseError = {
  status: 'INVALID_DATA' | 'NOT_FOUND' | 'UNAUTHORIZED',
  data: { message: string }
};

export type ServiceResponseSuccess<T> = {
  status: 'SUCCESSFUL' | 'CREATED',
  data: T
};

export type ServiceResponse<T> = ServiceResponseError | ServiceResponseSuccess<T>;