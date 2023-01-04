import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'library';
  items: MenuItem[]=[];    //menuItem was defined in primeNg



  ngOnInit(): void {
    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/'},
      {label: 'Library', icon: 'pi pi-fw pi-google', routerLink: 'library'},
      {label: 'Book', icon: 'pi pi-fw pi-discord', routerLink: 'book'},
      {label: 'Category', icon: 'pi pi-fw pi-compass', routerLink: 'category'},
      {label: 'Person', icon: 'pi pi-fw pi-bitcoin', routerLink: 'person'},        //for icon changing in navbar
      {label: 'Borrow',icon:'pi pi-fw pi-upload', routerLink:'borrow'},

    ];
  }
}
