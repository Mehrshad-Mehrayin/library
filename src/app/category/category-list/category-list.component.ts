import {Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges} from '@angular/core';
import {CategoryModel} from "../../model/category.model";
import {CategoryService} from "../../services/impls/category.service";
import {FormModeEnum} from "../../formMode.enum";
import {CatWithModeModel} from "../../model/catWithMode.model";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit, OnChanges{
  constructor(private categoryService: CategoryService) {}

  @Output() listOutput : EventEmitter<CatWithModeModel> = new EventEmitter<CatWithModeModel>();
  @Input() reloadList: boolean = false;
//------------properties----------------
categories: CategoryModel[] = [];
  formMode = FormModeEnum;
  cols = [
    { field: 'name', header: 'Name' },
    { field: 'edit', header: '' },
    { field: 'remove', header: '' },
  ];
inputSearch: string='';

//---------function----------------------
  getCategoryList(){
    return this.categoryService.getAll().subscribe(
      (data)=> {
        this.categories = data;
      }
    )
  }

  ngOnInit(): void {
    this.getCategoryList();
  }

  manageCatList(category?: CategoryModel, formModeEnum?: FormModeEnum) {
    const param : CatWithModeModel = new CatWithModeModel();
    param.model = category;
    param.mode = formModeEnum;
    this.listOutput.emit(param);    //for output
  }


  ngOnChanges(changes: SimpleChanges): void {
if (this.reloadList == true)
{this.getCategoryList()}
    }

  remove(categoryId: number) {
this.categoryService.delete(categoryId).subscribe(
  ()=>{
this.getCategoryList();
alert("delete successful soton");
  }
)
  }
}
