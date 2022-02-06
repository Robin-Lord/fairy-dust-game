import { NgModule } from '@angular/core';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentsModule,
    NgxSliderModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}