import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', pathMatch : 'full', redirectTo: 'home'},
  {
    path: "home",
    loadChildren: () => import('../app/modules/stocks/stocks.module').then(m => m.StocksModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
