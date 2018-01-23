import { Injectable } from '@angular/core';
import { menuOption } from '../nav-menu-data/menuOption';
import { homeOptions } from '../nav-menu-data/home-nav-options';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class NavMenuDataService {

  constructor() { }

  getMenu(option: string) : Observable<menuOption[]>
  {
   let result: menuOption[] = [];
   switch(option)
   {
     case '':
     result = homeOptions;
     break;
     case 'episodes':
     result = [];
     break;
     case 'about':
     result = homeOptions;
     break;
     case 'shop':
     result = [];
     break;
     default:
     result = homeOptions;
     break;
   }
    return of(result); 
  }
}
