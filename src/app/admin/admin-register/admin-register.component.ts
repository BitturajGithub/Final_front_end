import { AdminRegisterService } from './admin-register.service';
import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';


@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})

  export class AdminRegisterComponent implements OnInit {

    public registerForm!:FormGroup;
    constructor(private fb:FormBuilder,private api:AdminRegisterService,private toastService:NgToastService){

    }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      'admin_name':['',Validators.required],
      'admin_email':['',Validators.required],
      'admin_phone_no':['',Validators.required],
      'password':['',Validators.required],
    });
  }
    submit(){
      this.api.postRegistration(this.registerForm.value)
      .subscribe(res=>{
        
        this.toastService.success({detail:"SUCCESS",summary:"Admin Registered Successfully",duration:3000});
        this.registerForm.reset();

      })
    }
  }