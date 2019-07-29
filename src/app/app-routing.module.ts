import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ServicesComponent } from '../app/services/services.component';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path : '',redirectTo : 'login',pathMatch : 'full'},
  { path : 'login', component:LoginComponent},
  { path:'welcome',component: WelcomeComponent,canActivate:[AuthGuard]},
  { path:'service',component: ServicesComponent,canActivate:[AuthGuard]},
  { path:'contact',component: ContactComponent,canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const route = [LoginComponent,WelcomeComponent,ServicesComponent,ContactComponent]