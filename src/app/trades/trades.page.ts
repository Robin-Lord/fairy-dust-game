import { Component, OnInit } from '@angular/core';
import { CommodityValuesService } from '../commodity-values.service';

@Component({
  selector: 'app-trades',
  templateUrl: './trades.page.html',
  styleUrls: ['./trades.page.scss'],
})
export class TradesPage implements OnInit {

  constructor(public comValService: CommodityValuesService) { }

  ionViewWillEnter() {
    // Put here the code you want to execute
    //console.log("Loading")
    this.comValService.updateOwnedAndWantedValues();
  }

  ngOnInit() {
  }

  array1 = [
    {"property": "1"},
    {"property": "1"},
    {"property": "1"},
    {"property": "1"},
    {"property": "1"},
    {"property": "1"},
    {"property": "1"},
    {"property": "1"},
    {"property": "1"}
  ]

  // function addToArray() {
    
  // }

}
