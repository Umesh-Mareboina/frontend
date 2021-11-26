import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { FormsModule} from '@angular/forms';


import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BooksComponent } from './books/books.component';
import { BuynowComponent } from './buynow/buynow.component';
import { BuynowListComponent } from './buynow-list/buynow-list.component';
import { BuynowDetailsComponent } from './buynow-details/buynow-details.component';
import { UpdateBuynowComponent } from './update-buynow/update-buynow.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListComponent } from './user-list/user-list.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AddbookComponent } from './addbook/addbook.component';
import { UpdateAddbookComponent } from './update-addbook/update-addbook.component';
import { AddbookListComponent } from './addbook-list/addbook-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';




@NgModule({
  declarations: [
    AppComponent,

    
    HomeComponent,
    AboutComponent,
    BooksComponent,
    BuynowComponent,
    BuynowListComponent,
    BuynowDetailsComponent,
    UpdateBuynowComponent,
    CreateUserComponent,
    UserDetailsComponent,
    UserListComponent,
    UpdateUserComponent,
    LoginComponent,
    AdminComponent,
    AdminPageComponent,
    AddbookComponent,
    UpdateAddbookComponent,
    AddbookListComponent,
   
  ],
  imports: [
    BrowserModule,
    MatTableModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
