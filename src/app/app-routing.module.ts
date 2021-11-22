import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BooksComponent } from './books/books.component';
import { BuynowComponent } from './buynow/buynow.component';
import { BuynowDetailsComponent } from './buynow-details/buynow-details.component';
import { UpdateBuynowComponent } from './update-buynow/update-buynow.component';
import { BuynowListComponent } from './buynow-list/buynow-list.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AddbookComponent } from './addbook/addbook.component';
import { UpdateAddbookComponent } from './update-addbook/update-addbook.component';
import { AddbookListComponent } from './addbook-list/addbook-list.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'books', component: BooksComponent},
  {path: 'buynow', component: BuynowComponent},
  {path: 'about', component: AboutComponent},
  {path: 'create-user', component: CreateUserComponent},
  {path: '', redirectTo: 'users', pathMatch: 'full'},
  {path: 'update-user/:id', component: UpdateUserComponent},
  {path: 'user-details/:id', component: UserDetailsComponent},
  {path: 'update-buynow/:id', component: UpdateBuynowComponent},
  {path: 'buynow-details/:id', component: BuynowDetailsComponent},
  {path: 'buynowlist', component: BuynowListComponent},
  {path: 'users', component: UserListComponent},
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'admin-page', component: AdminPageComponent},
  {path: 'addbook', component: AddbookComponent},
  {path: 'update-addbook/:id', component: UpdateAddbookComponent},
  {path: 'addbooklist', component: AddbookListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }


