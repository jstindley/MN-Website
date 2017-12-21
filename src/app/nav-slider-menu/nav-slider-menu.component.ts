import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav-slider-menu',
  templateUrl: './nav-slider-menu.component.html',
  styleUrls: ['./nav-slider-menu.component.css']
})
export class NavSliderMenuComponent implements OnInit {
  @Output() eventClick = new EventEmitter();

  menuOptions = [
      {
      option: 'Mars Neptune',
      name: 'Mars Neptune',
      quote:'',
      bio: ``
    },
    {
      option: 'Real McReal',
      name: 'Real McReal',
      quote:'',
      bio: ``
    },
    {
      option: 'Owl',
      name: 'Owl',
      quote:'',
      bio: ``
    },
    {
      option: 'Heron',
      name: 'Heron',
      quote:'',
      bio: ``    
    }
  ];

  temp: string = 'home';
  loggedIn: boolean = false;
  account: string = 'Sign In'
  constructor() { }

  ngOnInit() {

  }


  navToPage(option){
    this.eventClick.emit(option);
    //this.optionTitle = option;
  }
  
  signedIn(){
    
    return this.loggedIn;
  }

  login()
  {
    this.account = 'Justin';
    this.loggedIn = true;
  }

  logout()
  {
    this.account = 'Sign In';
    this.loggedIn = false;
  }
}
