import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MasterdetailsComponent } from './masterdetails/masterdetails.component';
import { FormsModule } from '@angular/forms';
import {InsertService} from './insert.service'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    MasterdetailsComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(

    [{
      path:'login',
      component:LoginComponent

    },
    {
      path:'',
      component:RegistrationComponent

    },
    {
      path:'details',
      component:MasterdetailsComponent

    }

  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
