import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotComponent } from './auth/forgot/forgot.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrasiComponent } from './auth/registrasi/registrasi.component';


const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'registrasi',
    component:RegistrasiComponent
  },
  {
    path:'forgot',
    component:ForgotComponent
  },
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)
  },
  {
    path:'',
    pathMatch:'full',
    redirectTo:'/login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
