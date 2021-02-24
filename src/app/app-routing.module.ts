import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteappComponent } from './routeapp/routeapp.component';
import { AboutusComponent } from './aboutus/aboutus.component'

const routes: Routes = [
         {path:"Admin",component:RouteappComponent},
         {path:"User",component:RouteappComponent},
         {path:"AboutUs",component:AboutusComponent}
        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
