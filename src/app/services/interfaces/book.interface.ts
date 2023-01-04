import {Observable} from "rxjs";
import {BookModel} from "../../model/book.model";

export interface IBookInterface {
  getAll():Observable<BookModel[]>;
  add(book: BookModel):Observable<void>;
  update(book: BookModel): Observable<void>;
  delete(id: number): Observable<void>;
  getBookId(id: number): Observable<BookModel>;
}
