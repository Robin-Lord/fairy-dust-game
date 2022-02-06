import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HelperPage } from './helper.page';

const routes: Routes = [
  {
    path: '',
    component: HelperPage,
    children: [
      // {
      //   path: 'home',
      //   loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      // },
      {
        path: 'values',
        loadChildren: () => import('../values/values.module').then(m => m.ValuesPageModule)
      },

      {
        path: 'trades',
        loadChildren: () => import('../trades/trades.module').then(m => m.TradesPageModule)
      },
      {
        path: '',
        redirectTo: '/helper',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/helper',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HelperPageRoutingModule {}



// dsfgkhjdfshjkldsafhj