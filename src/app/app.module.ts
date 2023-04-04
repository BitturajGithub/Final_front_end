import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomepageComponent } from './homepage/homepage.component';
import {routes} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { EmpLoginComponent } from './emp-login/emp-login.component';
import { MngLoginComponent } from './mng-login/mng-login.component';
import { AddEmpComponent } from './admin/add-emp/add-emp.component';
import { AddMngComponent } from './admin/add-mng/add-mng.component';
// import { AddMngComponent } from './admin/add-mng/add-mng.component';
import { AsgMngComponent } from './admin/asg-mng/asg-mng.component';
import { UpdateEmpComponent } from './admin/update-emp/update-emp.component';
import { UpdateMngComponent } from './admin/update-mng/update-mng.component';
import { AddTaskComponent } from './manager/add-task/add-task.component';
import { TaskProgressComponent } from './manager/task-progress/task-progress.component';
import { LeaveApprovalComponent } from './manager/leave-approval/leave-approval.component';
import { CheckTaskComponent } from './employee/check-task/check-task.component';
import { UpdateTaskComponent } from './employee/update-task/update-task.component';
import { ApplyLeaveComponent } from './employee/apply-leave/apply-leave.component';
import { LeaveStatusComponent } from './employee/leave-status/leave-status.component';
import { ProfileUpdateComponent } from './employee/profile-update/profile-update.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';

import { UpdEmpComponent } from './admin/upd-emp/upd-emp.component';
import { EmpHomeComponent } from './employee/emp-home/emp-home.component';
import { MngHomeComponent } from './manager/mng-home/mng-home.component';
import { AdminEmpHomeComponent } from './admin/admin-emp-home/admin-emp-home.component';
import { AdminMngHomeComponent } from './admin/admin-mng-home/admin-mng-home.component';
import { AssignTaskComponent } from './manager/assign-task/assign-task.component';
import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';
import { ShowEmpComponent } from './admin/show-emp/show-emp.component';
import { ShowMngComponent } from './admin/show-mng/show-mng.component';
import { ShowLeaveComponent } from './manager/show-leave/show-leave.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


import { NgToastModule } from 'ng-angular-popup';
import {MatIconModule} from '@angular/material/icon';
import { NgConfirmModule } from 'ng-confirm-box';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

import {CdkMenuModule} from '@angular/cdk/menu';
import { AboutUsComponent } from './about-us/about-us.component';












@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    AdminLoginComponent,
    EmpLoginComponent,
    MngLoginComponent,
    AddEmpComponent,
    AddMngComponent,
    AsgMngComponent,
    UpdateEmpComponent,
    UpdateMngComponent,
    AddTaskComponent,
    TaskProgressComponent,
    LeaveApprovalComponent,
    CheckTaskComponent,
    UpdateTaskComponent,
    ApplyLeaveComponent,
    LeaveStatusComponent,
    ProfileUpdateComponent,
    AdminHomeComponent,
    UpdEmpComponent,
    EmpHomeComponent,
    MngHomeComponent,
    AdminEmpHomeComponent,
    AdminMngHomeComponent,
    AssignTaskComponent,
    AdminRegisterComponent,
    ShowEmpComponent,
    ShowMngComponent,
    ShowLeaveComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
    NgToastModule,
    NgConfirmModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    MatRadioModule,
    CdkMenuModule,
    



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
