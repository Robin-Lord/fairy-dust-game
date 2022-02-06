import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { VerticalSlidersComponent } from "./vertical-sliders/vertical-sliders.component"
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { Options } from '@angular-slider/ngx-slider';
import { IonicModule } from '@ionic/angular';

const PAGES = [
    VerticalSlidersComponent,
    // NgxSliderModule
]

@NgModule({
    declarations: PAGES,
    exports: PAGES,
    imports: [
        IonicModule,
        CommonModule,
        NgxSliderModule
    ]
})

export class ComponentsModule { 
    value: number = 10;
  options: Options = {
    floor: 0,
    ceil: 40,
    vertical: true
  };
  constructor() {}
}