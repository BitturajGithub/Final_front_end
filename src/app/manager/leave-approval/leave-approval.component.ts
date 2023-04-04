// import { Component } from '@angular/core';
// import { Task_model1 } from 'src/app/models/task-update-model';
import { Leave__approval_model } from 'src/app/models/leave_approval_modal';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LeaveApprovalService } from './leave-approval.service';
// import { UpdateTaskService } from './update-task.service';
// import { FindTaskServiceService } from './find-task-service.service';
import { FindLeaveService } from './find-leave.service';

@Component({
  selector: 'app-leave-approval',
  templateUrl: './leave-approval.component.html',
  styleUrls: ['./leave-approval.component.css']
})

export class LeaveApprovalComponent implements OnInit {

  updatedata :Leave__approval_model = new Leave__approval_model();
  datap:any;
  show!:boolean;
  process_id!:Number;
  Employee_name!:string;
  leave_type!:string;
  leave_reason!:string;
  // start_date!:string;
  total_days!:string;
  leave_status!:string; 

  constructor(private findService:FindLeaveService,private updateService:LeaveApprovalService,private route : Router){}

  ngOnInit() {
  
  }

  search(){
    this.process_id=this.process_id;
    this.findService.getDetails(this.process_id).subscribe(  
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
    // this.updatedata.teacher_id=this.teacher_id
    this.updatedata.process_id=this.process_id;
    this.updatedata.Employee_name=this.Employee_name;
    this.updatedata.leave_type=this.leave_type;
    this.updatedata.leave_reason=this.leave_reason;
    this.updatedata.total_days=this.total_days;
    this.updatedata.leave_status=this.leave_status;
    

    this.updateService.update(this.updatedata).subscribe(
      response =>{
        console.log(response.status);
        if(response.status == 403){
          alert("Data has not been updated !");
        }else{
          alert("Data has been updated successfully!!!");
          this.route.navigate(['/showleave']);
        }
      }
    )
  }

}