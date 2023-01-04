import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {IBorrowInterface} from "../interfaces/borrow.interface";
import {BorrowModel} from "../../model/borrow.model";

@Injectable()
export class BorrowService implements IBorrowInterface {

  constructor(private httpClient: HttpClient){}

  url: string = "http://192.168.10.80:8080/library/borrow/";

  getAll(): Observable<BorrowModel[]> {
    return this.httpClient.get<BorrowModel[]>(this.url+"getAll");
  }

  lendingBooks(borrow: BorrowModel): Observable<BorrowModel>{
    return this.httpClient.post<BorrowModel>(this.url+"lendingBooks", borrow);
  }

  returnbooks(id: number): Observable<void>{
    return this.httpClient.delete<void>(this.url+'returnbooks/'+id);
  }
}
