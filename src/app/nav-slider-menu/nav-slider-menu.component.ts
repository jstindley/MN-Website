import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { menuOption } from '../nav-menu-data/menuOption';
import { Routes, Router, NavigationEnd, Event } from '@angular/router';
import { Inplace } from 'primeng/primeng';
import { NavMenuDataService } from '../services/nav-menu-data.service';

@Component({
  selector: 'app-nav-slider-menu',
  templateUrl: './nav-slider-menu.component.html',
  styleUrls: ['./nav-slider-menu.component.css']
})
export class NavSliderMenuComponent implements OnInit {
  @Output() eventClick = new EventEmitter();

  menuOptions: menuOption[];
  subHeader: string = '';
  loggedIn: boolean = false;
  account: string = 'Sign In'

  constructor(private navMenuService: NavMenuDataService, private router: Router) { 
    router.events.subscribe( (event: Event) => {

      if (event instanceof NavigationEnd) {
          
          let page =  this.router.url.replace('/','');
          //alert(page);
          this.getSubHeader(page);
          this.getNavData(page);
      }
  });


  }

  ngOnInit() {
    this.getNavData('');
  }

  // add a service to inject the proper values

  getNavData(page: string){
    this.navMenuService.getMenu(page).subscribe
    (menuOption => this.menuOptions = menuOption);
  }

  getSubHeader(page: string)
  {
    switch (page){
      case "":
      case "about":
      this.subHeader = 'Mercury Phoenix Crew';
      break;
      case "episodes":
      this.subHeader = 'Episodes';
      break;
      case "shop":
      this.subHeader = 'Shop';
      break;
      default:
      this.subHeader = 'Mercury Phoenix Crew';
      break;
    }
  }

  navToPage(option){
    this.eventClick.emit(option);
    //this.optionTitle = option;
  }
  
  signedIn(){
    return this.loggedIn;
  }

  characterNav(){
    let result;

    return result;
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
