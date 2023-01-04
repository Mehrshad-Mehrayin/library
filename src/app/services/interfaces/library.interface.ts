import {Observable} from "rxjs";
import {LibraryModel} from "../../model/library.model";

export interface ILibraryInterface {
  getAll(): Observable<LibraryModel[]>;
  checkExistNum(id: number): Observable<number>;
}
