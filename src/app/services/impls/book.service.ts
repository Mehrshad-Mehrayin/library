import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {IBookInterface} from "../interfaces/book.interface";
import {BookModel} from "../../model/book.model";


@Injectable()
export class BookService implements IBookInterface{

  constructor(private httpClient: HttpClient){};

  url: string = "http://192.168.10.80:8080/library/book/";

  getAll(): Observable<BookModel[]> {
    return this.httpClient.get<BookModel[]>(this.url + "getAll");
  }

  add(book: BookModel): Observable<void>{
    return this.httpClient.post<void>(this.url + "add", book);
  }

  update(book: BookModel): Observable<void>{
    return this.httpClient.put<void>(this.url + "update", book);
  }

  delete(id: number): Observable<void>{
    return this.httpClient.delete<void>(this.url+"delete/"+id);
  }

  getBookId(id: number): Observable<BookModel>{
    return this.httpClient.get<BookModel>(this.url+"get?id="+id);
  }

}
