import { Component, OnInit, ViewChild } from '@angular/core';
import { Routes, Router, NavigationEnd } from '@angular/router';
import {DialogModule} from 'primeng/primeng';
import { Chain } from '@angular/compiler';

@Component({
  selector: 'app-site-page-container',
  templateUrl: './site-page-container.component.html',
  styleUrls: ['./site-page-container.component.scss']
})
export class SitePageContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  opened: boolean = false;
  pageTitle: string = '';
  characterTitle: string = '';
  characterName: string = '';
  characterQuote: string = '';
  characterBio: string = '';
  @ViewChild('sidenav') sidenav;
  


  updateTitle(character){
    this.characterTitle = character.option;
    this.characterName = character.name;
    this.characterBio = character.bio;
    this.characterQuote = character.quote;
    //alert('From the site container: ' + option);
    //this.sidenav.close();
    this.display = true;
    
  }

  hamburgerToggle()
  {
    let wrapperMenu = document.querySelector('.hamburgers');
    wrapperMenu.classList.toggle('is-active');
    this.sidenav.toggle();
  }

  test()
  {
    let wrapperMenu = document.querySelector('.hamburgers');
    if(this.sidenav.opened){
      this.opened = true;
    }
    else{
      if(this.opened)
      {
        wrapperMenu.classList.toggle('is-active');
        this.opened = false;
      }
    }
  }

  close()
  {
    if (this.opened)
    {
    this.sidenav.toggle();
    let wrapperMenu = document.querySelector('.hamburgers');
    wrapperMenu.classList.toggle('is-active');
    this.opened = false;
    }
  }
 
  display: boolean = false;
  
      showDialog() {
          this.display = true;
      }
}
