// import { Component, OnInit } from '@angular/core';
// import { User } from '../user';
// import { UserService } from '../user.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-user-list',
//   templateUrl: './user-list.component.html',
//   styleUrls: ['./user-list.component.css']
// })
// export class UserListComponent implements OnInit {
  
//   users: User[];

//   constructor(private userService: UserService,
//     private router: Router) { }

//   ngOnInit(): void {
//     this.getUsers();

//   }

  
  
  
//   private getUsers(){
//     this.userService.getUsersList().subscribe(data => {
//       this.users = data;
//     });
//   }

//   userDetails(id: number){
//     this.router.navigate(['user-details', id]);
//   }

//   back(){
//     this.router.navigate(['admin-page']);
//   }
//   updateUser(id: number){
//     this.router.navigate(['update-user', id]);
//   }

//   deleteUser(id: number){
//     this.userService.deleteUser(id).subscribe( data => {
//       console.log(data);
//       this.getUsers();
//     })
//   }

// }


///////////////////////////////////////////////////////////////Material Grid Component////////////////////////////////////////////////////////////////////

import { Component, OnInit } from '@angular/core';
//import { MatPaginator } from '@angular/material/paginator';
//import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: User[];

  displayedColumns: String[] = ['firstName','lastName','gender','emailId','password'];
  //dataSource = this.students;

  dataSource: MatTableDataSource<User>;
 

  //@ViewChild('paginator') paginator! : MatPaginator;
  //@ViewChild(MatSort) MatSort! : MatSort;
  
  constructor(private userService: UserService, private router:Router) { }
 
  ngOnInit(): void {
    this.getUsers();
  }
  




 private getUsers(){
        this.userService.getUsersList().subscribe(data => {
          this.users = data;
          this.dataSource = new MatTableDataSource(this.users);
        });
      }
    
      // userDetails(id: number){
      //   this.router.navigate(['user-details', id]);
      // }
    
      back(){
        this.router.navigate(['admin-page']);
      }

    //   updateUser(id: number){
    //     this.router.navigate(['update-user', id]);
    //   }
    
    
    //   deleteUser(id: number){
    //     this.userService.deleteUser(id).subscribe( data => {
    //       console.log(data);
    //       this.getUsers();
    //     })
    //  }
    
    }
  
  
  
  // getStudents(){
  //   this.studentService.getStudentsList().subscribe(data => {
  //     this.students = data;
  //     this.dataSource = new MatTableDataSource(this.students);
  //   });
  // }
  
  
  /*
  getStudentsList() {
    this.studentService.getStudentsList().subscribe(data => {
      this.students = data;
   
     //this.dataSource.paginator=this.paginator;
     //this.dataSource.sort=this.MatSort;
    });
  }
/*
  // delete contact by id (not working yet)
  deleteContact(id: number) {
    this.service.deleteContact(id)
      .subscribe(
        data => {
          console.log(data);
          //this.reloadData();
        },
        error => console.log(error));
  }
 
  
  // searchng fuctanality 
  filterData($event : any)
  {

    this.dataSource.filter=$event.target.value;
  }*/
