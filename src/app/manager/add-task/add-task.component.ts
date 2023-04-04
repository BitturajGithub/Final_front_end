import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { AddEmpService } from './add-emp.service';
import { AddTaskService } from './add-task.service';
import { NgToastService } from 'ng-angular-popup';
  
  @Component({
    selector: 'app-add-task',
    templateUrl: './add-task.component.html',
    styleUrls: ['./add-task.component.css']
  })
  export class AddTaskComponent implements OnInit {
  
    
      public registerForm!:FormGroup;
          constructor(private fb:FormBuilder,private api:AddTaskService,private toastService:NgToastService){
      
          }
        ngOnInit(): void {
          this.registerForm = this.fb.group({
            'task_name':['',Validators.required],
            'task_detail':['',Validators.required],
            'allowed_days':['',Validators.required],
            // 'start_date':['',Validators.required],
            'task_progress':['',Validators.required],
            // 'end_date':['',Validators.required],
            'Employee_name':['',Validators.required],
          });
        }
          submit(){
           
            this.api.postRegistration(this.registerForm.value)
            .subscribe(res=>{
              this.toastService.success({detail:"SUCCESS",summary:"Task Created Successfully",duration:2000});
              this.registerForm.reset();
      
            })
          }
        }
    
    
  
