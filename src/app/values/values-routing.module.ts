import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ValuesPage } from './values.page';

const routes: Routes = [
  {
    path: '',
    component: ValuesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ValuesPageRoutingModule {}
