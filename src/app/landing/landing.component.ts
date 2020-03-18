import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private viewportScroller: ViewportScroller) { }

  ngOnInit() {
  }

  function1(){
    let x = document.querySelector('.menu-toggler');
    x.classList.toggle('open');
    document.querySelector('.top-nav').classList.toggle('open');
  }

  function2(){
    let x = document.querySelector('.menu-toggler');
    x.classList.remove('open');
    document.querySelector('.top-nav').classList.remove('open');
  }

  // onClick(elementId: string): void{
  //   this.viewportScroller.scrollToAnchor(elementId);
  // }

  scrollToElement($element): void {
    console.log($element);
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  gotoTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}
