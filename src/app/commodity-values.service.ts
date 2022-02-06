import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommodityValuesService {

  commodityVals = {
    "red": 12,
    "blue": 12,
    "white": 12,
    "green": 12,
  };

  ownedCommodityAmounts = {
    "red": 0,
    "blue": 0,
    "green": 0,
    "white": 0,
    "coin": 0,
  }

  wantedCommodityAmounts = {
    "red": 0,
    "blue": 0,
    "green": 0,
    "white": 0,
    "coin": 0,
  }

  ownedCommodities = {
    "red": {
      "icon": "../assets/blue-cube",
      "amount": [{ "property": "1" }]
    },
    "blue": {
      "icon": "../assets/blue-cube",
      "amount": [{ "property": "1" }]
    },
    "green": {
      "icon": "../assets/blue-cube",
      "amount": [{ "property": "1" }]
    },
    "white": {
      "icon": "../assets/blue-cube",
      "amount": [{ "property": "1" }]
    }
  }



  allCommodities = {
    "red": {
      "moniker": "Dragon Scales",
      "shortened": "DS",
      "current_val": 12,
      "future_val": 12,
      "own": [],
      "want": [],
    },
    "blue": {
      "moniker": "Mermaid Tail",
      "shortened": "MT",
      "current_val": 12,
      "future_val": 12,
      "own": [],
      "want": [],
    },
    "green": {
      "moniker": "Basilisk Venom",
      "shortened": "BV",
      "current_val": 12,
      "future_val": 12,
      "own": [],
      "want": [],
    },
    "white": {
      "moniker": "Yeti Pelt",
      "shortened": "YP",
      "current_val": 12,
      "future_val": 12,
      "own": [],
      "want": [],
    }

  }

  calculateValue(ownedOrWanted, currentOrFuture = "current_val"){
    let ownedValue = Object.entries(this.allCommodities).map(function([key, value]) { 
      console.log(key)
      console.log(ownedOrWanted)
      console.log(value[ownedOrWanted])
      //console.log(value[ownedOrWanted])
      let totalVal = value[currentOrFuture] * value[ownedOrWanted].length
      //console.log("Total val: " + totalVal)
      return totalVal;
    }, 
    0
    ).reduce((a, b) => a + b, 0);
    //console.log("Owned value: " + ownedValue)
    return ownedValue;
  }


  resetAll(){

    Object.entries(this.allCommodities).forEach(([key, value]) => {
      //console.log(`${key}: ${value}`)
      value["own"] = [];
      value["want"] = [];
      
  });
  this.updateOwnedAndWantedValues()

    // Object.entries(this.allCommodities).forEach({
    //   //console.log(key)
    //     this.allCommodities[key]["owned"] = [];
    //     this.allCommodities[key]["wanted"] = [];
    // })
  }

  ownedAndWantedvalues = {
    "current_val":{
      "opposite_val": "future_val",
      "class": "isactive",
      "disabled": true,
      "friendly_name": "Current value",
    "own": this.calculateValue("own"),
    "want": this.calculateValue("want")},
    "future_val":{
      "opposite_val": "current_val",
      "class": "notactive",
      "disabled": false,
      "friendly_name": "Future value",
      "own": this.calculateValue("own", "future_val"),
      "want": this.calculateValue("want", "future_val")
    }


  }

  ownedAndWantedStatus = {
    "focus_state": "current_val",
    "alternate_state": "future_val",
  }



  updateOwnedAndWantedValues() {
    //console.log("Updating values")
    for (let phaseIn in ["current_val", "future_val"]){
      let phase = ["current_val", "future_val"][phaseIn]
      for (let ownOrWantIn in ["own", "want"]){
        let ownOrWant = ["own", "want"][ownOrWantIn]
        this.ownedAndWantedvalues[phase][ownOrWant] = this.calculateValue(ownOrWant, phase)
      }
    }
  }

  array1 = [
    { "property": "1" },
  ]

  addItem(col, ownedOrWanted) {
    //console.log("Adding " + col+" "+ownedOrWanted)

    //console.log(this.allCommodities[col][ownedOrWanted])
    //console.log("Random number: "+Math.random())

    var plusOrMinus = Math.random() < 0.5 ? -1 : 1;

    let randomX = Math.trunc(Math.random()*20)
    randomX = randomX*plusOrMinus
    let randomY = Math.trunc(Math.random()*20)
    randomY = randomY*plusOrMinus
    // if (ownedOrWanted == "own"){
    //   randomY = randomY - 30
    // } else {
    //   randomY = randomY + 40
    // }

    let dictToPush = { "x": randomX+"px", "y": randomY+"px", "rot": Math.trunc(Math.random()*90)+"deg"}
    //console.log("dictToPush: ")
    //console.log(dictToPush)
    this.allCommodities[col][ownedOrWanted].push(dictToPush)
    for (let phaseIn in ["current_val", "future_val"]){
      let phase = ["current_val", "future_val"][phaseIn]
      //console.log(this.ownedAndWantedvalues[phase])
      this.ownedAndWantedvalues[phase][ownedOrWanted] = this.calculateValue(ownedOrWanted, phase)
    }
  }

  removeItem(col, ownedOrWanted) {
    //console.log("Removing " + col+" "+ownedOrWanted)
    //console.log(this.allCommodities[col])
    this.allCommodities[col][ownedOrWanted].pop()
    for (let phaseIn in ["current_val", "future_val"]){
      let phase = ["current_val", "future_val"][phaseIn]
      this.ownedAndWantedvalues[phase][ownedOrWanted] = this.calculateValue(ownedOrWanted, phase)
    }
  }

  get() {
    return this.commodityVals;
  }

  someFunction() {
    //console.log("Working")
    return "Working"
  }

  someFunction2() {
    //console.log("Working2")
    return "Working2"
  }

  getValue(comName) {
    return this.commodityVals[comName];
  }

  getValues() {
    return this.commodityVals;
  }

  setValues(comName, val) {
    //console.log(comName)
    //console.log(this.allCommodities[comName])
    this.allCommodities[comName]["current_val"] = val;
    //console.log(this.ownedAndWantedvalues)
    // console.log(this.wantedValue)
  }

  getOwnedAmounts() {
    return this.ownedCommodityAmounts;
  }

  setOwnedAmount(comName, value) {
    this.ownedCommodityAmounts[comName] = value;
  }

  getWantedAmounts() {
    return this.wantedCommodityAmounts;
  }

  setWantedAmount(comName, value) {
    this.wantedCommodityAmounts[comName] = value;
  }

  increaseWantedAmount(col) {

  }

  nowToFuture(nowOrFuture, stateToSwitchTo, currentState){
    console.log(currentState)
    console.log(stateToSwitchTo)
    this.ownedAndWantedStatus.focus_state = stateToSwitchTo
    this.ownedAndWantedStatus.alternate_state = currentState

    this.ownedAndWantedvalues[stateToSwitchTo]["class"] = "isactive"
    this.ownedAndWantedvalues[currentState]["class"] = "notactive"

    this.ownedAndWantedvalues[currentState]["disabled"] = !this.ownedAndWantedvalues[currentState]["disabled"] 
    this.ownedAndWantedvalues[stateToSwitchTo]["disabled"] = !this.ownedAndWantedvalues[stateToSwitchTo]["disabled"] 
    

  }




  constructor() { }
}


