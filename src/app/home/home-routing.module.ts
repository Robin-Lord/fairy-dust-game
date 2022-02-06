import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'values',
        loadChildren: () => import('../values/values.module').then(m => m.ValuesPageModule)
      },

      {
        path: 'trades',
        loadChildren: () => import('../trades/trades.module').then(m => m.TradesPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
