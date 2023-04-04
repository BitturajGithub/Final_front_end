// import { Component } from '@angular/core';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { UpdateStudentData } from 'src/app/classes/update-student-data';
import { UpdateEmp } from 'src/app/models/update-emp';
// import { UpdateTeacherData } from 'src/app/classes/update-teacher-data';

// import { UpdateTeacherService } from './update-teacher.service';
import { UpdateEmpService } from './update-emp.service';
// import { FindService } from '../find.service';
// import { FindTeacherService } from '../find-teacher.service';
import { FindEmpService } from './find-emp.service';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {


  updatedata : UpdateEmp=new UpdateEmp();
  datap : any;
  show !: boolean;
  emp_id!:Number;
  Employee_name!:string;
  // Department!:string;
  // emp_email!:string;
  emp_phone_no!:string;
  // emp_password!:string;
  Manager_name!:string; 
   

  constructor(private findService:FindEmpService,private updateService:UpdateEmpService,private route : Router){}

  ngOnInit() {
  
  }

  search(){
    this.emp_id=this.emp_id;
    this.findService.getDetails(this.emp_id).subscribe(  
      response => {  
        this.datap = response; 
        if(this.datap!=null){
          this.show = true
          return this.show
        }
        else{
          this.show = false
          return this.show
        }
       
      }
    )
  }
  updateData(){
    this.updatedata.emp_id=this.emp_id;
    this.updatedata.Employee_name=this.Employee_name;
    // this.updatedata.Department=this.Department;
    // this.updatedata.Department=this.Department;
    // this.updatedata.emp_email=this.emp_email;
    // this.updatedata.emp_email=this.emp_email;
    this.updatedata.emp_phone_no=this.emp_phone_no;
    // this.updatedata.emp_password=this.emp_password;
    // this.updatedata.Manager_name=this.Manager_name;
    this.updatedata.Manager_name=this.Manager_name;
    

    this.updateService.update(this.updatedata).subscribe(
      response =>{
        console.log(response.status);
        if(response.status == 403){
          alert("Data has not been updated !");
        }else{
          alert("Data has been updated successfully!!!");
          this.route.navigate(['/showemp']);
        }
      }
    )
  }

}