import { NgModule } from '@angular/core';
import { Routes, RouterModule ,Router } from '@angular/router';
import { RouteappComponent } from './routeapp/routeapp.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { LocalServiceService } from './local-service.service';
import { AuthGuarGuard } from './auth-guar.guard';


const routes: Routes = [
         {path:"Admin",component:RouteappComponent, canActivate:[AuthGuarGuard]},
         {path:"User",component:RouteappComponent},
         {path:"AboutUs",component:AboutusComponent}
        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
