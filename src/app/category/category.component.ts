import {Component, Input} from '@angular/core';
import {CatWithModeModel} from "../model/catWithMode.model";

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  //----------properties-----------
  paramUpdate: CatWithModeModel = new CatWithModeModel();
  reload: boolean = false;

//-----------functions-------------
  inputParam($event: CatWithModeModel) {
    if ($event != undefined)
    {this.paramUpdate = $event;}    //when edit button pressed, replace $event content to paramUpdate
  }

  reloadList(item: boolean) {
this.reload = item;
  }
}

