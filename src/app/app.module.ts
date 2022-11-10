import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularMaterialModule} from "./angular-material.module";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { environment } from 'src/environments/environment';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {LoaderComponent} from "./core/loader/loader.component";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatCardModule} from "@angular/material/card";
import { HeaderComponent } from './modules/header/header.component';
import { StocksModule } from './modules/stocks/stocks.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule, ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule,
    NgbModule, MatProgressSpinnerModule, MatCardModule, StocksModule, CoreModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
