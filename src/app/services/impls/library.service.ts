import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ILibraryInterface} from "../interfaces/library.interface";
import {LibraryModel} from "../../model/library.model";


@Injectable()
export class LibraryService implements ILibraryInterface{

  constructor(private httpClient: HttpClient){}

  url: string = "http://192.168.10.80:8080/library/library/";

  getAll(): Observable<LibraryModel[]> {
    return this.httpClient.get<LibraryModel[]>(this.url + "getAll");
  }

  checkExistNum(id: number): Observable<number>{
    return this.httpClient.get<number>(this.url+"checkExistNum/"+id);
  }



}
