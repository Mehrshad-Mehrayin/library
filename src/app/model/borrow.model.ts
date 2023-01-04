import {BookModel} from "./book.model";
import {PersonModel} from "./person.model";

export class BorrowModel {
  book: BookModel =new BookModel();
  person:  PersonModel = new PersonModel();
  receiveDate!: string;
  rejDate!: string;
}
