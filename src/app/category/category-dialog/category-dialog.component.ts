import {Component, Input, OnChanges, Output, SimpleChanges,EventEmitter} from '@angular/core';
import {CatWithModeModel} from "../../model/catWithMode.model";
import {FormModeEnum} from "../../formMode.enum";
import {CategoryModel} from "../../model/category.model";
import {CategoryService} from "../../services/impls/category.service";
import {FormBuilder, FormGroup, FormControl, Validators, AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-category-dialog',
  templateUrl: './category-dialog.component.html',
  styleUrls: ['./category-dialog.component.css']
})
export class CategoryDialogComponent implements OnChanges{
  constructor(private categoryService: CategoryService, private fb : FormBuilder) {}

  @Input() listInput: CatWithModeModel = new CatWithModeModel();
  @Output() isReload = new EventEmitter<boolean>();
//-------------properties-----------------
  displayBasic: boolean = false;
  category : CategoryModel = new CategoryModel();
  reactiveCat : FormGroup = this.fb.group({
    name : new FormControl(null, [Validators.required]),      //for reactive form pt1
  })
  inputSearch: string='';
//-----------display--------------------
  display: boolean = true;
  displayModal: boolean | undefined;
/*  displayBasic: boolean | undefined;*/    //error duplicate dad ba display basic properties
  displayMaximizable: boolean | undefined;
  displayPosition: boolean | undefined;
  position: string | undefined;
  //------------functions---------------
  showDialog() {
    this.displayBasic = true;               //something default in primeNg
  }
  showMaximizableDialog() {
    this.displayMaximizable = true;
  }
  showPositionDialog(position: string) {
    this.position = position;
    this.displayPosition = true;
  }

  save() {
    this.displayBasic = false;
       if (this.category.id == null) {
    this.mappingFunction(this.reactiveCat);   //pt3 reactive  => pt5 in cat dialog html => put in main div and input (replace for ngmodel)
    this.categoryService.add(this.category).subscribe(
      () => {

    alert('add was successful soton');
    this.category = new CategoryModel();
    this.isReload.emit(true);
        this.reactiveCat.patchValue({         //reactive pt4
          name:'',
          id:''
        })
      }
    )
         this.isReload.emit(false);     //value emit ro false kardim ke age to updaye estefade shod, true shavad.
  }
  else {
    this.categoryService.update(this.category).subscribe(
      ()=>{
       this.isReload.emit(true)         //marbot be reload
      alert('update was successful soton');
      }
    )
  }
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.listInput.mode == FormModeEnum.ADD)
    {this.displayBasic = true;
    this.category = new CategoryModel();
    }

    else if(this.listInput?.model?.name != null){
  this.categoryService.getCategoryid(this.listInput.model.id).subscribe(
    (data)=>{
  this.reactiveCat.patchValue({
name: data.name,
id: data.id
  })
    }
  )
this.displayBasic = true;
    }
  }

  mappingFunction(cat: AbstractControl){       //for reactive form pt2
    if (cat.value.id == true) {
      this.category.id = cat.value.id;
    }
    this.category.name = cat.value.name;      //rabti be shart bala nadare
  }
}
