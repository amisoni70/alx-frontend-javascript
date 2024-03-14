import { RowID } from ./interface
import { RowElement } from ./interface

declare function insertRow(row: RowElement) : number;
declare function deleteRow(rowId : RowId) : undefined;
declare function updateRow(rowId : RowId, row : RowElement) : number;
