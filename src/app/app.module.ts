import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CreateStudentComponent } from './create-student/create-student.component';
import { FormsModule} from '@angular/forms';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BooksComponent } from './books/books.component';
import { BuynowComponent } from './buynow/buynow.component';
import { BuynowListComponent } from './buynow-list/buynow-list.component';
import { BuynowDetailsComponent } from './buynow-details/buynow-details.component';
import { UpdateBuynowComponent } from './update-buynow/update-buynow.component';






@NgModule({
  declarations: [
    AppComponent,
   
    CreateStudentComponent,
    StudentDetailsComponent,
    StudentListComponent,
    UpdateStudentComponent,
    HomeComponent,
    AboutComponent,
    BooksComponent,
    BuynowComponent,
    BuynowListComponent,
    BuynowDetailsComponent,
    UpdateBuynowComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
