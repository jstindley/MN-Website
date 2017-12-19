import { Component, OnInit } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {  }

  ngOnInit() {
  }

gotoPath(link: string){
  switch(link.toLocaleLowerCase()){
    case 'home':
    this.router.navigate(['home']);
    break;
    case 'episodes':
    this.router.navigate(['episodes']);
    break;
    case 'about':
    this.router.navigate(['about']);
    break;
    case 'shop':
    this.router.navigate(['shop']);
    break;
  }
  
}

}
