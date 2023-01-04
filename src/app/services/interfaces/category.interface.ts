import {Observable} from "rxjs";
import {CategoryModel} from "../../model/category.model";

export interface ICategoryInterface {
  getAll(): Observable<CategoryModel[]>;       //output of all functions are observable
  add(category: CategoryModel): Observable<void>;                    //khoroji void e zira add chizi barnmigardone
  update(category: CategoryModel): Observable<void>;
  getCategoryid(id: number): Observable<CategoryModel>;
  delete(id: number): Observable<void>;

}
