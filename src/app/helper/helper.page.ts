import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-helper',
  templateUrl: './helper.page.html',
  styleUrls: ['./helper.page.scss'],
})
export class HelperPage implements OnInit {

  constructor(public router: Router) {}

  ngOnInit() {
    //console.log('this.router.url', this.router.url);
  }
  
 helperPage = true

 rainDropPosition = Array.from({length: 30}, () => Math.floor(Math.random() * 100));
 rainDropDelay = Array.from({length: 30}, () => Math.random() * 4);
 rainDropTime = Array.from({length: 30}, () => Math.random());


generateRaindropsArray(){
  var increment = -10
  var rainDrops = []

  while (increment < 100){
    //random number between 98 and 1
    let randoHundo = (Math.floor(Math.random() * (98 - 1 + 1) + 1));
    //random number between 5 and 2
    let randoFiver = (Math.floor(Math.random() * (5 - 2 + 1) + 2));
    //increment
    increment += randoFiver;

    let tempClass = ""

    if (increment < 30){
      tempClass = "left"
    }

    if (increment > 60){
      tempClass = "right"
    }

    let tempDict = {
      "left": String(increment)+"%",
      "bottom": String((randoFiver + randoFiver - 1 + 100))+"%",
      "delay": "0."+String(randoHundo)+"s",
      "duration": "0.5"+String(randoHundo)+"s",
      "class": tempClass
    }
    rainDrops.push(tempDict)
  }
  //console.log(rainDrops)
  return rainDrops
}

rainDrops = this.generateRaindropsArray()
backgroundRainDrops = this.generateRaindropsArray()

isSplashPage(url){
  console.log("url:") 
  console.log(url)
  const regex = /^\/?(helper|home|)[^\/]+$/g;
  const found = url.match(regex);
  return found != null
 }

 }
