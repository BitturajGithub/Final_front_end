
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Mng_model_upd } from 'src/app/models/mng_update';
// import { UpdateEmp } from 'src/app/models/update-emp';
import { UpdateMngService } from './update-mng.service';
// import { UpdateEmpService } from './update-emp.service';
// import { FindEmpService } from './find-emp.service';
import { FindMngService } from './find-mng.service';

@Component({
  selector: 'app-update-mng',
  templateUrl: './update-mng.component.html',
  styleUrls: ['./update-mng.component.css']
})
export class UpdateMngComponent implements OnInit{


  updatedata : Mng_model_upd =new Mng_model_upd ();
  datap : any;
  show !: boolean;
  mng_id!:Number;
  Manager_name!:string;
  mng_email!: string;
  mng_phone_no!: string;
  // mng_password!: string;

  
   

  constructor(private findService:FindMngService,private updateService:UpdateMngService,private route : Router){}

  ngOnInit() {
  
  }

  search(){
    this.mng_id=this.mng_id;
    this.findService.getDetails(this.mng_id).subscribe(  
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
    this.updatedata.mng_id=this.mng_id;
    this.updatedata.Manager_name =this.Manager_name;
    this.updatedata.mng_email=this.mng_email;
    this.updatedata.mng_phone_no=this.mng_phone_no;
    

    this.updateService.update(this.updatedata).subscribe(
      response =>{
        console.log(response.status);
        if(response.status == 403){
          alert("Data has not been updated !");
        }else{
          alert("Data has been updated successfully!!!");
          this.route.navigate(['/showmng']);
        }
      }
    )
  }

}