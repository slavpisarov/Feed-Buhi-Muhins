import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';
import { AuthActivate } from './auth.activate';

const routes: Routes = [
  {
    path:'',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path:'home',
    component: HomeComponent,
    
  },
  {
    path:'catalog',
    component: CatalogComponent,
  },  
  {
    path:'create',
    component: CreateComponent,
    canActivate:[AuthActivate]
  },
  {
    path:'user',
    loadChildren: ()=> import('./user/user.module').then((m) => m.UserModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
