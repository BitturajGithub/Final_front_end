// import { Component } from '@angular/core';
import { CheckTaskService } from './check-task.service';
import { Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Task_model } from 'src/app/models/task.model';
import { Router } from '@angular/router';
// import { LeaveStatusService } from './leave-status.service';
@Component({
  selector: 'app-check-task',
  templateUrl: './check-task.component.html',
  styleUrls: ['./check-task.component.css']
})

export class CheckTaskComponent implements OnInit{

  public dataSource!:MatTableDataSource<Task_model>;
  public users!:Task_model[];
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // displayedColumns:string[]=['Employee_name','Joining_date','Department','emp_email','emp_phone_no','emp_password','Manager_name','Action'];
  displayedColumns:string[]=['task_id','task_name','task_detail','allowed_days','task_progress','Employee_name'];
  
  constructor(private api:CheckTaskService,private router:Router){

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
    this.router.navigate(['applyleave',Employee_name]);

  }
}


