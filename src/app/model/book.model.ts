import {CategoryModel} from "./category.model";

export class BookModel {
  id!: number;
  name!: string;
  shabak!: number;
  printData!: string;
  cover !:string;
  file !:string;
  category: CategoryModel =new CategoryModel();
}
