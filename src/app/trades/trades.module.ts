import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TradesPageRoutingModule } from './trades-routing.module';
import { CommodityValuesService } from '../commodity-values.service';

import { TradesPage } from './trades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TradesPageRoutingModule
  ],
  declarations: [TradesPage]
})


export class TradesPageModule {
  public comValService: CommodityValuesService

  
}


