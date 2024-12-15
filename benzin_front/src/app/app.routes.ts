import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { SellComponent } from './components/sell/sell.component';

const routes: Routes = [
  {
    path: 'signin',
    component: SigninComponent    
  },
  {
    path: 'signup',
    component: SignupComponent    
  },
  {
    path: 'sell',
    component: SellComponent    
  },
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }