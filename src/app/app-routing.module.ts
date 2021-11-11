import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BooksComponent } from './books/books.component';
import { BuynowComponent } from './buynow/buynow.component';
import { BuynowDetailsComponent } from './buynow-details/buynow-details.component';
import { UpdateBuynowComponent } from './update-buynow/update-buynow.component';
import { BuynowListComponent } from './buynow-list/buynow-list.component';



const routes: Routes = [
  {path: 'students', component: StudentListComponent},
  {path: 'home', component: HomeComponent},
  {path: 'books', component: BooksComponent},
  {path: 'buynow', component: BuynowComponent},
  {path: 'about', component: AboutComponent},
  {path: 'create-student', component: CreateStudentComponent},
  {path: '', redirectTo: 'students', pathMatch: 'full'},
  {path: 'update-student/:id', component: UpdateStudentComponent},
  {path: 'student-details/:id', component: StudentDetailsComponent},
  {path: 'update-buynow/:id', component: UpdateBuynowComponent},
  {path: 'buynow-details/:id', component: BuynowDetailsComponent},
  {path: 'buynowlist', component: BuynowListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],                                                                                                                                                                                                                                                                                                          
  exports: [RouterModule]
})
export class AppRoutingModule { }


