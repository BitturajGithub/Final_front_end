// import { Component } from '@angular/core';
// import { Component } from '@angular/core';
import { Component, Injectable } from '@angular/core';
import { FormGroup,FormArray,FormControl,Validators, FormBuilder } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-mng-login',
  templateUrl: './mng-login.component.html',
  styleUrls: ['./mng-login.component.css']
})
export class MngLoginComponent {


  signUp:FormGroup;
  forbiddenNames=['bitturaj'];
  error:any;
  
  constructor(private http:HttpClient,private formBuilder :FormBuilder,private cookie:CookieService,
    private route:ActivatedRoute,private router:Router){
      this.signUp = new FormGroup({
        username:new FormControl(null,[Validators.required,this.forbiddenNameCheck.bind(this)]),
         password:new FormControl(null,[Validators.required]),
        
      
    })

  }

  ngOnInit(){
    this.signUp = new FormGroup({
        username:new FormControl(null,[Validators.required,this.forbiddenNameCheck.bind(this)]),
         password:new FormControl(null,[Validators.required]),
    })
    }

  forbiddenNameCheck(control:FormControl):{[s:string]:boolean}| null{
     if(this.forbiddenNames.indexOf(control.value)!==-1){
          return {'forbiddenUserName':true};
     }else{
       //{'forbiddenNameCheckUserName':false}// 
       return null;
     }
     }
    onSubmit(){
      if(this.signUp.valid){
      const postData={username:this.signUp.get('username')?.value,password:this.signUp.get('password')?.value}

      this.http.post<{'access_token':string,'token_type':string}>('http://localhost:9000/login',postData)
      .subscribe(Response=>{
        console.log(Response)
        if (Response){
          this.router.navigate(['mnghome'])
        }
      })}}}