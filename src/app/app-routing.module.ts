import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SigninpageComponent } from './signinpage/signinpage.component';
import { HimComponent } from './him/him.component';
import { HerComponent } from './her/her.component';
import { UnisexComponent } from './unisex/unisex.component';
import { LoginComponent } from './Component/login/login.component';
import { SignupComponent } from './Component/signup/signup.component';
import { PaymentComponent } from './payment/payment.component';
import { AdminComponent } from './admin/admin.component';
import { ChoiceforloginComponent } from './choiceforlogin/choiceforlogin.component';
// import { SignupComponent } from './signup/signup.component';

const routes: Routes = [ 
  {path:"",component:HomepageComponent},
  {path:"SignIn",component:LoginComponent},
  {path:"Him",component:HimComponent},
  {path:"Her",component:HerComponent},
  {path:"Unisex",component:UnisexComponent},
  {path:"SignUp",component:SignupComponent},
  {path:"SignIn/SignUp",component:SignupComponent},
  {path:"Him/payment",component:PaymentComponent},
  {path:"Her/payment",component:PaymentComponent},
  {path:"Unisex/payment",component:PaymentComponent},
  {path:"SignIn/admin",component:AdminComponent},
  {path:"choice",component:ChoiceforloginComponent},
  {path:"choice/SignIn",component:LoginComponent},
  {path:"choice/SignIn/admin",component:AdminComponent},
  {path:"choice/SignUp",component:SignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
