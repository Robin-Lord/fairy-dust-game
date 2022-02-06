import { NgModule } from '@angular/core';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ValuesPageRoutingModule } from './values-routing.module';

import { ValuesPage } from './values.page';
import { ComponentsModule } from '../components/components.module';
import { CommodityValuesService } from '../commodity-values.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ValuesPageRoutingModule,
    ComponentsModule,
    NgxSliderModule
  ],
  declarations: [ValuesPage]
})
export class ValuesPageModule {
  onChange(event) { console.log(event.target.value) }
  constructor(
    public comValService: CommodityValuesService
  ) { 
  }


  ionViewDidLoad() {
    //console.log("View loaded")
    this.comValService.someFunction(); // This will log "I do something useful!"
}

}
