export interface PaginatedResult<T> {
    data: T[];
    total: number;
    page: number;
    perPage: number;
    totalPages: number;
}
export interface ApiError {
    statusCode: number;
    message: string | string[];
    error: string;
}
export interface PaginationQuery {
    page?: number;
    perPage?: number;
}
export declare const toKobo: (naira: number) => number;
export declare const toNaira: (kobo: number) => number;
export declare const formatNaira: (kobo: number) => string;
//# sourceMappingURL=common.d.ts.map