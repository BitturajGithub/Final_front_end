import { ShowMngService } from './show-mng.service';

import { Router } from '@angular/router';
import { Mng_model } from 'src/app/models/manager.model';
import { Component, ViewChild, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';


@Component({
  selector: 'app-show-mng',
  templateUrl: './show-mng.component.html',
  styleUrls: ['./show-mng.component.css']
})



export class ShowMngComponent implements OnInit{
  public dataSource!:MatTableDataSource<Mng_model>;
  public users!:Mng_model[];
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns:string[]=['mng_id','Manager_name','mng_email','mng_phone_no','Action'];

  constructor(private api:ShowMngService,private router:Router){

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

  // edit(Employee_name:string){
  //   // this.router.navigate(['updateemp',Employee_name]);
  //   this.router.navigate(['addemp',Employee_name]);

  // }
}
