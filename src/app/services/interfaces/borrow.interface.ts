import {Observable} from "rxjs";
import {BorrowModel} from "../../model/borrow.model";

export interface IBorrowInterface {
  getAll():Observable<BorrowModel[]>;
  lendingBooks(borrow: BorrowModel): Observable<BorrowModel>;
  returnbooks(id: number): Observable<void>;
}
