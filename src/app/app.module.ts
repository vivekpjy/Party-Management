import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { PartyListComponent } from './components/party-list/party-list.component';
import { PartyFormComponent } from './components/party-form/party-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PartyService } from './service/party.service';
import { AlertMessageService } from './service/alert-message.service';
import { AuthService } from './auth-service/auth.service';
import { AuthGuard } from './auth-service/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PartyListComponent,
    PartyFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    HttpClientModule,
    FormsModule
    
   
  ],
  providers: [PartyService, AlertMessageService,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
