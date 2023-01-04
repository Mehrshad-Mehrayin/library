import {Observable} from "rxjs";
import {PersonModel} from "../../model/person.model";
import {CategoryModel} from "../../model/category.model";

export interface IPersonInterface {
  getAll():Observable<PersonModel[]>;
  delete(id: number):Observable<void>;
  add(person: PersonModel):Observable<void>;
  update(person: PersonModel): Observable<void>;
  getPersonId(id: number):Observable<PersonModel>;
}
