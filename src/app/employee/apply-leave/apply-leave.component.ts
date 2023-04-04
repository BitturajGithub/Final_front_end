import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApplyLeaveService } from './apply-leave.service';
import { NgToastService } from 'ng-angular-popup';
import { Emp_model } from './../../models/employee.model';
import { ActivatedRoute } from '@angular/router';
import { Leave_model } from 'src/app/models/Leave.model';      
@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})

  export class ApplyLeaveComponent implements OnInit {
  
    public registerForm!:FormGroup;
    public userIdToUpdate!:string; // provide number here to fetch by id
    public isUpdateActive: boolean = false;
    ApplyLeaveService: any;
        constructor(private fb:FormBuilder,private ActivatedRoute:ActivatedRoute,private api:ApplyLeaveService,private toastService:NgToastService){
    
        }
      ngOnInit(): void {
        this.registerForm = this.fb.group({
          'Employee_name':['',Validators.required],
          'leave_type':['',Validators.required],
          'leave_reason':['',Validators.required],

          // 'start_date':['',Validators.required],
          'total_days':['',Validators.required],
          'leave_status':['',Validators.required],
        });
        this.ActivatedRoute.params.subscribe(val=>{
          this.userIdToUpdate = val['Employee_name'];
          this.ApplyLeaveService.getRegisteredUserId(this.userIdToUpdate)
          .subscribe((res: Leave_model)=>{
            this.isUpdateActive = true;
            this.fillFormToUpdate(res)
  
          })
        })
      }
      fillFormToUpdate(user:Leave_model){
        this.registerForm.setValue({
        Employee_name:user.Employee_name,
        leave_type:user.leave_type,
        leave_reasom:user.leave_reason,
        
        total_days:user.total_days,
        leave_status:user.leave_status,
        
        })
      }
      
        submit(){
         
          this.api.postRegistration(this.registerForm.value)
          .subscribe(res=>{
            
            this.toastService.success({detail:"SUCCESS",summary:"Leave applied Successfully",duration:2000});
            this.registerForm.reset();
            // this.toastService.warning({detail:"Empty"})
    
          })
          
        }
        update(){
      
        }
      }

       