import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteappComponent } from './routeapp/routeapp.component';


const routes: Routes = [{path:"string",component:RouteappComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
