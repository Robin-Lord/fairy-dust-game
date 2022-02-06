import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { NgModule } from '@angular/core';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { BrowserModule } from '@angular/platform-browser';
import { CommodityValuesService } from '../../commodity-values.service';
import { IonicModule } from '@ionic/angular';

interface SimpleSliderModel {
  value: number;
  valueBlue: number;
  valueRed: number;
  valueGreen: number;
  valueWhite: number;
  options: Options;
}

interface RangeSliderModel {
  minValue: number;
  maxValue: number;
  options: Options;
}

@Component({
  selector: 'app-vertical-sliders',
  templateUrl: './vertical-sliders.component.html'
})





export class VerticalSlidersComponent {

  constructor(public comValService: CommodityValuesService) { }


  sliderValue = 0;

  verticalSlider1: SimpleSliderModel = {
    value: 12,
    valueBlue: this.comValService.getValue("blue"),
    valueRed: this.comValService.getValue("red"),
    valueGreen: this.comValService.getValue("green"),
    valueWhite: this.comValService.getValue("white"),
    options: {
      floor: 2,
      ceil: 40,
      vertical: true
    }
  };

  onChange(col, sentVar) { 
    
    // console.log(col, sentVar); 
    // console.log("Setting...");
    this.comValService.setValues(col, sentVar);
    // console.log(this.comValService.getValue(col))
    // console.log(this.comValService.getValues())
  }

  // verticalSlider2: RangeSliderModel = {
  //   minValue: 20,
  //   maxValue: 80,
  //   options: {
  //     floor: 0,
  //     ceil: 100,
  //     vertical: true
  //   }
  // };

  // verticalSlider3: SimpleSliderModel = {
  //   value: 5,
  //   options: {
  //     floor: 0,
  //     ceil: 10,
  //     vertical: true,
  //     showTicks: true
  //   }
  // };

  // verticalSlider4: RangeSliderModel = {
  //   minValue: 1,
  //   maxValue: 5,
  //   options: {
  //     floor: 0,
  //     ceil: 6,
  //     vertical: true,
  //     showTicksValues: true
  //   }
  // };

  // verticalSlider5: SimpleSliderModel = {
  //   value: 50,
  //   options: {
  //     floor: 0,
  //     ceil: 100,
  //     vertical: true,
  //     showSelectionBar: true
  //   }
  // };

  // verticalSlider6: SimpleSliderModel = {
  //   value: 6,
  //   options: {
  //     floor: 0,
  //     ceil: 6,
  //     vertical: true,
  //     showSelectionBar: true,
  //     showTicksValues: true,
  //     ticksValuesTooltip: (v: number): string => {
  //       return 'Tooltip for ' + v;
  //     }
  //   }
  // };
}