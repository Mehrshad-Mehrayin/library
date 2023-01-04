import {BookModel} from "./book.model";
import {CategoryModel} from "./category.model";

export class LibraryModel {
  id!: number;
  number!: number;
  existNum!: number;
  isBorrowAble!: boolean;
  book!: BookModel;
  category!: CategoryModel;
}
