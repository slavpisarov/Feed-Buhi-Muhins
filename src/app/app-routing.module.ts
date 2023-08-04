import { NgModule, createComponent } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CatalogComponent } from './catalog/catalog.component';
import { CreateComponent } from './create/create.component';
import { AuthActivate } from './auth.activate';
import { EditFoodComponent } from './edit-food/edit-food.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

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
    path:'catalog/:foodId',
    component: EditFoodComponent,
    canActivate:[AuthActivate]
  },
  {
    path:'user',
    loadChildren: ()=> import('./user/user.module').then((m) => m.UserModule)
  },
  {
    path:'**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
