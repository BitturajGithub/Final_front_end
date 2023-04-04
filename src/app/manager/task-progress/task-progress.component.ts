
import { Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Router } from '@angular/router';
import { TaskProgressService } from './task-progress.service';
import { Task_model } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-progress',
  templateUrl: './task-progress.component.html',
  styleUrls: ['./task-progress.component.css']
})
export class TaskProgressComponent implements OnInit{

  public dataSource!:MatTableDataSource<Task_model>;
  public users!:Task_model[];
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // displayedColumns:string[]=['Employee_name','Joining_date','Department','emp_email','emp_phone_no','emp_password','Manager_name','Action'];
  displayedColumns:string[]=['task_name','task_detail','allowed_days','Employee_name','task_progress'];

  constructor(private api:TaskProgressService,private router:Router){

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

  edit(task_id:number){
    this.router.navigate(['updateemp',task_id]);

  }

  // edit(Employee_name:string){
  //   // this.router.navigate(['updateemp',Employee_name]);
  //   this.router.navigate(['applyleave',Employee_name]);

  // }
}


