import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CategoryComponent } from './category/category.component';
import { CategoryDialogComponent } from './category/category-dialog/category-dialog.component';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { BookComponent } from './book/book.component';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookDialogComponent } from './book/book-dialog/book-dialog.component';
import { LibraryComponent } from './library/library.component';
import { PersonComponent } from './person/person.component';
import { PersonListComponent } from './person/person-list/person-list.component';
import { PersonDialogComponent } from './person/person-dialog/person-dialog.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";

//----------------primeNg----------------------------
import {TabMenuModule} from 'primeng/tabmenu';
import {HttpClientModule} from "@angular/common/http";
import {TableModule} from 'primeng/table';
import {CategoryService} from "./services/impls/category.service";
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {GlobalSearchPipe} from "./global-search.pipe";
import { BorrowComponent } from './borrow/borrow.component';
import { BorrowListComponent } from './borrow/borrow-list/borrow-list.component';
import { BorrowDialogComponent } from './borrow/borrow-dialog/borrow-dialog.component';
import {NgxPaginationModule} from "ngx-pagination";
import {BookService} from "./services/impls/book.service";
import {BorrowService} from "./services/impls/borrow.service";
import {PersonService} from "./services/impls/person.service";


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'book', component:BookComponent},
  {path:'person', component:PersonComponent},
  {path:'library', component:LibraryComponent},
  {path:'category', component:CategoryComponent},
  {path:'404', component:NotfoundComponent},
  {path:'**', redirectTo: '/404'}

]




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GlobalSearchPipe,
    PersonComponent,
    BookComponent,
    BookDialogComponent,
    BookListComponent,
    PersonDialogComponent,
    PersonListComponent,
    CategoryComponent,
    CategoryDialogComponent,
    CategoryListComponent,
    BorrowComponent,
    BorrowListComponent,
    BorrowDialogComponent,



  ],
  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    TabMenuModule,
    HttpClientModule,
    TableModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    DialogModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    NgxPaginationModule,

  ],
  providers: [CategoryService, LibraryComponent, BookService, BorrowService, PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
