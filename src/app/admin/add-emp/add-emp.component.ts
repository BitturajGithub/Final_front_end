import { NgToastService } from 'ng-angular-popup';
import { Emp_model } from './../../models/employee.model';
import { ShowEmpService } from './../show-emp/show-emp.service';
import { ActivatedRoute } from '@angular/router';
// import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddEmpService } from './add-emp.service';
import { Emp_model1 } from 'src/app/models/emp1.model';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css']
})
export class AddEmpComponent implements OnInit {
  [x: string]: any;
   signupForm!:FormGroup;
   message:string='';
   isProcess:boolean=false;
   className='d-none'

  //  property for updating employee
  public userIdToUpdate!:string; // provide number here to fetch by id
  public isUpdateActive: boolean = false;
  ShowEmpService: any;
  
  //  activatedroute is for editing employee
  constructor(private fb:FormBuilder,private ActivatedRoute:ActivatedRoute, private user:AddEmpService,private toastService:NgToastService){
    this.signupForm=this.fb.group({
      'Employee_name':['',Validators.required],
      'Joining_date':['',Validators.required],
      'Department':  ['',Validators.required],
      'emp_email':   ['',Validators.required],
      'emp_phone_no':['',Validators.required],
      'emp_password':['',Validators.required],
      'Manager_name':['',Validators.required],
      
    });
    // for updating
      this.ActivatedRoute.params.subscribe(val=>{
        this.userIdToUpdate = val['Employee_name'];
        this.ShowEmpService.getRegisteredUserId(this.userIdToUpdate)
        .subscribe((res: Emp_model)=>{
          this.isUpdateActive = true;
          this.fillFormToUpdate(res)

        })
      })
  }
  
  ngOnInit():void{

  }
  onSigup(){
    this.isProcess=true;
    const data=this.signupForm.value;
    this.user.onSignup(data).subscribe(res=>{
      if(res.success){
        this.isProcess=false;
        this.message="this is ";
        this.className='alert alert-success';
      }else{
        this.isProcess=false;  
        this.message=res.message;
        this.className='alert alert-danger';
      }

    },err=>{
      this.isProcess=false;
      this.message="Server Error";
      this.className="alert alert-danger";
    })
    };
    // edit button code
    fillFormToUpdate(user:Emp_model){
      this.signupForm.setValue({
      Employee_name:user.Employee_name,
      // Joining_date:user.Joining_date,
      Department:user.Department,
      emp_email:user.emp_email,
      emp_phone_no:user.emp_phone_no,
      emp_password:user.emp_password,
      Manager_name: user.Manager_name,
      })
    }
    submit(){
      // if(this.signupForm.valid){
      this.user.postRegistration(this.signupForm.value)
      .subscribe(res=>{
        
        this.toastService.success({detail:"SUCCESS",summary:"Admin Registered Successfully",duration:3000});
        this.signupForm.reset();

      })
      // else{
      // this.toastService.warning({detail:"Empty fields",summary:"Mandatory fields are required",duration:3000});
      // this.signupForm.reset();
        // }
    }
    update(){

    }
}

