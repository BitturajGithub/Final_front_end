import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddMngService } from './add-mng.service';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-add-mng',
  templateUrl: './add-mng.component.html',
  styleUrls: ['./add-mng.component.css']
})
export class AddMngComponent implements OnInit {

  public registerForm!:FormGroup;
      constructor(private fb:FormBuilder,private api:AddMngService,private toastService:NgToastService){
  
      }
    ngOnInit(): void {
      this.registerForm = this.fb.group({
        'Manager_name':['',Validators.required],
        'mng_email':['',Validators.required],
        'mng_phone_no':['',Validators.required],
        'mng_password':['',Validators.required],
      });
    }
      submit(){
        if(this.registerForm.valid){
        this.api.postRegistration(this.registerForm.value)
        .subscribe(res=>{
          
          this.toastService.success({detail:"SUCCESS",summary:"Admin Registered Successfully",duration:2000});
          this.registerForm.reset();
  
        })}
        else{
          this.toastService.warning({detail:"Empty fields",summary:"Mandatory fields are required",duration:3000})
        }
      }
    }

