import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StocksComponent} from "./stocks.component";
import {CoreModule} from "../../core/core.module";
import {RouterModule, Routes} from "@angular/router";
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {FormsModule} from "@angular/forms";

const rootRoutes: Routes = [
  {
    path: "",
    component:StocksComponent
  },
];


@NgModule({
  declarations: [StocksComponent],
  imports: [
    RouterModule.forChild(rootRoutes),
    CommonModule,
    CoreModule,
    NgbPaginationModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],providers:[
  ]
})
export class StocksModule { }
