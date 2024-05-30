import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { PartyListComponent } from './components/party-list/party-list.component';
import { PartyFormComponent } from './components/party-form/party-form.component';
import { AuthGuard } from './auth-service/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path:'login', component:LoginComponent},
  { path: 'party-list', component: PartyListComponent, canActivate: [AuthGuard] },
  { path: 'party-form', component: PartyFormComponent, canActivate: [AuthGuard] },
  { path: 'party-form/:id', component: PartyFormComponent, canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
