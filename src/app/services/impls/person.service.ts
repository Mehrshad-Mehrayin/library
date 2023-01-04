import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IPersonInterface} from "../interfaces/person.interface";
import {PersonModel} from "../../model/person.model";


@Injectable()
export class PersonService implements IPersonInterface{
  constructor (private httpClient: HttpClient){}
  url : string = "http://192.168.10.80:8080/library/person/";

  getAll(): Observable<PersonModel[]>{
    return this.httpClient.get<PersonModel[]>(this.url + "getAll");
  }

  delete(id: number): Observable<void>{
    return this.httpClient.delete<void>(this.url + "delete/" + id);
  }

  add(person: PersonModel): Observable<void>{
    return this.httpClient.post<void>(this.url+"add", person);
  }

  update(person: PersonModel): Observable<void>{
    return this.httpClient.put<void>(this.url+"update", person);
  }

  getPersonId(id: number): Observable<PersonModel>{
    return this.httpClient.get<PersonModel>(this.url+"get?id="+id);
  }

}
