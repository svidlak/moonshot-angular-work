import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { PublicComponent } from './public/public.component';
import { CallbackComponent } from './callback.component';
import { LoginComponent } from './login/login.component';

import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'public',
    component: PublicComponent,
    canActivate: [
      AuthGuard
    ]
  },
  {
    path: 'callback',
    component: CallbackComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [AuthGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
