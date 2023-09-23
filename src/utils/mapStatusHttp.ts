export default function mapStatusHttp(status: string): number {
  const statusHttp: Record<string, number> = {
    CREATED: 201,
    BAD_REQUEST: 400,
    NOT_FOUND: 404,
    UNAUTHORIZED: 401,
    SUCCESSFUL: 200,
    UNPROCESSABLE: 422,
  };

  return statusHttp[status] ?? 500;
}