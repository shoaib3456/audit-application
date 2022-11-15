import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { tabReducer } from './reducers/tab.reducer';

import { AppRoutingModule } from './app-routing.module';
import {FormsModule,ReactiveFormsModule } from '@angular/forms'
import {Ng2TelInputModule} from 'ng2-tel-input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';


import { AppComponent } from './app.component';
import { CustomerRegistrationComponent } from './pages/customer-registration/customer-registration.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { WrapperComponent } from './pages/wrapper/wrapper.component';
import { ContactPersonComponent } from './pages/contact-person/contact-person.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerRegistrationComponent,
    HeaderComponent,
    SidebarComponent,
    WrapperComponent,
    ContactPersonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    Ng2TelInputModule ,
    FormsModule,
    ReactiveFormsModule,
    NgxMatSelectSearchModule,
    StoreModule.forRoot({ tab: tabReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
