export default interface QueryResponse<T> {
    total: number;
    currentPageIndex: number;
    maxPageIndex: number;
    results: T[];
}
