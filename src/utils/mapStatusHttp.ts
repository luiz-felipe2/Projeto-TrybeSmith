export default function mapStatusHttp(status: string): number {
  const statusHttp: Record<string, number> = {
    CREATED: 201,
    INVALID_DATA: 400,
    NOT_FOUND: 404,
    UNAUTHORIZED: 401,
  };

  return statusHttp[status] ?? 500;
}