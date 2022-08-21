export declare class ResultList {
    search_result: any;
    tagid: string;
    tableid: string;
    constructor(tagid: string, data: any);
    generateTagID(tagid: string): string;
    removeResultListTable(container: any): void;
    createResultListTable(container: any, tableHeaders: string[]): void;
    appendResult(result: any, resultIndex: number): void;
}
