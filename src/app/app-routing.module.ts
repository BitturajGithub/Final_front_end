import { UpdEmpComponent } from './admin/upd-emp/upd-emp.component';
import { ShowMngComponent } from './admin/show-mng/show-mng.component';
import { ShowEmpComponent } from './admin/show-emp/show-emp.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';

import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminEmpHomeComponent } from './admin/admin-emp-home/admin-emp-home.component';
import { AdminMngHomeComponent } from './admin/admin-mng-home/admin-mng-home.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { UpdateEmpComponent } from './admin/update-emp/update-emp.component';
import { AddEmpComponent } from './admin/add-emp/add-emp.component';
import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { EmpHomeComponent } from './employee/emp-home/emp-home.component';
import { ApplyLeaveComponent } from './employee/apply-leave/apply-leave.component';
import { CheckTaskComponent } from './employee/check-task/check-task.component';
import { LeaveStatusComponent } from './employee/leave-status/leave-status.component';
import { ProfileUpdateComponent } from './employee/profile-update/profile-update.component';
import { UpdateTaskComponent } from './employee/update-task/update-task.component';


import { MngLoginComponent } from './mng-login/mng-login.component';
import { MngHomeComponent } from './manager/mng-home/mng-home.component';
import { AddTaskComponent } from './manager/add-task/add-task.component';
import { LeaveApprovalComponent } from './manager/leave-approval/leave-approval.component';
import { AssignTaskComponent } from './manager/assign-task/assign-task.component';
import { TaskProgressComponent } from './manager/task-progress/task-progress.component';
import { AddMngComponent } from './admin/add-mng/add-mng.component';
import { UpdateMngComponent } from './admin/update-mng/update-mng.component';
import { ShowLeaveComponent } from './manager/show-leave/show-leave.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminroleGuard } from './admin-login/admin-auth';
import { AuthGuard } from './auth-guard';



export const routes: Routes = [
  {path:"",component:HomepageComponent,pathMatch :'full'},
  {path:"login",component:LoginComponent},
  { path:'adminlogin',component:AdminLoginComponent},
  {path:'adminhome',component:AdminHomeComponent},
  {path:'adminmnghome',component:AdminMngHomeComponent},
  {path:'adminemphome',component:AdminEmpHomeComponent},
  {path:'addemployee',component:AddEmpComponent},
  {path:'adminregister',component:AdminRegisterComponent},
  {path:'showemp',component:ShowEmpComponent},
  {path:'showmng',component:ShowMngComponent},
  {path:'viewemp/:id', component:UpdateEmpComponent},
  // {path:'updateemp/:Employee_name',component:UpdateEmpComponent},
  {path:'addemp/:Employee_name',component:AddEmpComponent},
  {path:'updateemp',component:UpdateEmpComponent},
  {path:'aboutus',component:AboutUsComponent},

  
  {path:'employeelogin',component:EmpLoginComponent},
  {path:'emphome',component:EmpHomeComponent},
  {path:'applyleave',component:ApplyLeaveComponent},
  {path:'checktask',component:CheckTaskComponent},
  {path:'leavestatus',component:LeaveStatusComponent},
  {path:'profileupdate',component:ProfileUpdateComponent},
  {path:'updatetask',component:UpdateTaskComponent},

 
  { path:'managerlogin',component:MngLoginComponent},
  { path:'mnghome',component:MngHomeComponent},
  { path:'addtask',component:AddTaskComponent},
  { path:'assigntask',component:AssignTaskComponent},
  {path: 'taskprogress',component:TaskProgressComponent},
  { path:'leaveapproval',component:LeaveApprovalComponent},
  {path : 'addmng', component:AddMngComponent},
  {path: 'updatemng',component:UpdateMngComponent},
  {path:'showleave',component:ShowLeaveComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  constructor(private router: RouterModule ){}
}
