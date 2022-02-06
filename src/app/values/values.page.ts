import { Component, OnInit } from '@angular/core';
import { Options } from '@angular-slider/ngx-slider';
import { NgxSliderModule } from '@angular-slider/ngx-slider';
import { IonicModule } from '@ionic/angular';
import { CommodityValuesService } from '../commodity-values.service';

@Component({
  selector: 'app-values',
  templateUrl: './values.page.html',
  styleUrls: ['./values.page.scss'],
})
export class ValuesPage implements OnInit {

  constructor(public comValService: CommodityValuesService) { }

  value: number = 10;
  options: Options = {
    floor: 0,
    ceil: 40,
    vertical: true
  };

  helperPage = false

  ngOnInit() {
  }

}
