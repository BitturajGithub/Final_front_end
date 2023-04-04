import { Task_model1 } from 'src/app/models/task-update-model';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UpdateTaskService } from './update-task.service';
import { FindTaskServiceService } from './find-task-service.service';



@Component({
  selector: 'app-update-task',
  templateUrl: './update-task.component.html',
  styleUrls: ['./update-task.component.css']
})

export class UpdateTaskComponent implements OnInit {

  updatedata :Task_model1 = new Task_model1();
  datap:any;
  show!:boolean;
  task_id!:Number;
  task_name!: string; 
  task_detail!: string;
  // /start_date !: string;
  allowed_days!:string;
  task_progress!: string;
  // end_date!: string;
  Employee_name!: string;

  constructor(private findService:FindTaskServiceService,private updateService:UpdateTaskService,private route : Router){}

  ngOnInit() {
  
  }

  search(){
    this.task_id=this.task_id;
    this.findService.getDetails(this.task_id).subscribe(  
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
    this.updatedata.task_id=this.task_id;
    this.updatedata.task_name=this.task_name;
    this.updatedata.task_detail=this.task_detail;
    this.updatedata.allowed_days=this.allowed_days;
    this.updatedata.task_progress=this.task_progress;
    this.updatedata.Employee_name=this.Employee_name;
    

    this.updateService.update(this.updatedata).subscribe(
      response =>{
        console.log(response.status);
        if(response.status == 403){
          alert("Data has not been updated !");
        }else{
          alert("Data has been updated successfully!!!");
          this.route.navigate(['/emphome']);
        }
      }
    )
  }

}