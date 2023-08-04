import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { AuthActivate } from '../auth.activate';
import { AuthActivateLoginRegister } from '../authLoginRegister.activate';

const routes: Routes = [
  {
    path: 'login',
    component:LoginComponent,
    canActivate:[AuthActivateLoginRegister]

  },
  {
    path: 'register',
    component:RegisterComponent,
    canActivate:[AuthActivateLoginRegister]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
