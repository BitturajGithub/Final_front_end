import { Router } from '@angular/router';
import { Emp_model } from './../../models/employee.model';
import { Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';

import { ShowEmpService } from './show-emp.service';
@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})


export class ShowEmpComponent implements OnInit{
  public dataSource!:MatTableDataSource<Emp_model>;
  public users!:Emp_model[];
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns:string[]=['emp_id','Employee_name','Department','emp_email','emp_phone_no','Manager_name','Action'];

  constructor(private api:ShowEmpService,private router:Router){

  }
  ngOnInit(): void {
    this.getEmployee();
  }
  getEmployee(){
    this.api.getRegisteredUser()
    .subscribe(res=>{
      this.users = res;
      this.dataSource = new MatTableDataSource(this.users);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort=this.sort;
    })
  }
  applyFilter(event : Event) {
    const filterValue = (event.target as HTMLInputElement).value; // Remove whitespace
     // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator){
      this.dataSource.paginator.firstPage();
    }
  
  }

  // edit(id:number){
  //   this.router.navigate(['updateemp',id]);

  // }

  edit(Employee_name:string){
    // this.router.navigate(['updateemp',Employee_name]);
    this.router.navigate(['addemp',Employee_name]);

  }
}
