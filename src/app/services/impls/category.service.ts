import {ICategoryInterface} from "../interfaces/category.interface";
import {Observable} from "rxjs";
import {CategoryModel} from "../../model/category.model";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
@Injectable()
export class CategoryService implements ICategoryInterface {
  constructor(private httpClient: HttpClient) {}

  url: string = "http://192.168.10.80:8080/library/category/";

  getAll(): Observable<CategoryModel[]> {
    return this.httpClient.get<CategoryModel[]>(this.url+"getAll") ;       //getAll category
  }

  add(category: CategoryModel): Observable<void>{
    return this.httpClient.post<void>(this.url+"add",category);          //vaqti function vorodi dare, vorodi hamrah url ersal mishe
  }                                                                           //e.g category to add
  update(category: CategoryModel): Observable<void> {
    return this.httpClient.put<void>(this.url+"update",category);         //for update
  }

  getCategoryid(id: number): Observable<CategoryModel>{
    return this.httpClient.get<CategoryModel>(this.url+"get/"+id);
  }

  delete(id: number): Observable<void>{
    return this.httpClient.delete<void>(this.url + "delete/"+id);
  }


}
