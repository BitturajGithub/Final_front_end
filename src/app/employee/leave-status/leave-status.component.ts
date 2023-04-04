import { Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { Leave_model } from 'src/app/models/Leave.model';
import { Router } from '@angular/router';
import { LeaveStatusService } from './leave-status.service';
@Component({
  selector: 'app-leave-status',
  templateUrl: './leave-status.component.html',
  styleUrls: ['./leave-status.component.css']
})
export class LeaveStatusComponent implements OnInit{

  public dataSource!:MatTableDataSource<Leave_model>;
  public users!:Leave_model[];
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  // displayedColumns:string[]=['Employee_name','Joining_date','Department','emp_email','emp_phone_no','emp_password','Manager_name','Action'];
  displayedColumns:string[]=['process_id','Employee_name','leave_type','leave_reason','total_days','leave_status'];

  constructor(private api:LeaveStatusService,private router:Router){

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


