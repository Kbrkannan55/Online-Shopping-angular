import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SigninpageComponent } from './signinpage/signinpage.component';
// import { SignupComponent } from './signup/signup.component';
import { HimComponent } from './him/him.component';
// import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
// import { HttpClientModule } from '@angular/common/http';
// import { AdminComponent } from './Component/admin/admin.component';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { LoginComponent } from './Component/login/login.component';
import { UserComponent } from './Component/user/user.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
// import { FormGroup } from '@angular/forms';
import { InterceptorService } from './Services/interceptor.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';
import { SignupComponent } from './Component/signup/signup.component';
import { HerComponent } from './her/her.component';
import { UnisexComponent } from './unisex/unisex.component';
import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';
import { AdminComponent } from './admin/admin.component';
import { ChoiceforloginComponent } from './choiceforlogin/choiceforlogin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    SigninpageComponent,
    HimComponent,
    DashboardComponent,
    LoginComponent,
    UserComponent,SignupComponent, HerComponent, UnisexComponent, PaymentComponent, CartComponent,AdminComponent, ChoiceforloginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,ReactiveFormsModule,FormsModule
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:InterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }