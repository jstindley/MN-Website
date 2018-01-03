import { Component, OnInit, ViewChild } from '@angular/core';
import { Routes, Router, NavigationEnd } from '@angular/router';
import {DialogModule, ButtonModule} from 'primeng/primeng';
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
  characterBio: string = ``;
  @ViewChild('sidenav') sidenav;
  characterDisplay: boolean = false;
  settingDisplay: boolean = false;

  updateTitle(character){
    if (character.option != null){
    this.characterTitle = character.option;
    this.characterName = character.name;
    this.characterBio = character.bio;
    this.characterQuote = character.quote;
    //alert('From the site container: ' + character.bio);
    this.characterDisplay = true;
    }
    else{
      this.settingDisplay = true;
      
    }
  }

  hamburgerToggle()
  {
    let wrapperMenu = document.querySelector('.hamburgers');
    wrapperMenu.classList.toggle('is-active');
    this.sidenav.toggle();
  }

  toggleDrawer()
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

  closeDisplayandNav() 
  //function that closes the nav drawer (should be used for closing the modal by the 'X')
  {
    if (this.opened)
    {
    this.sidenav.toggle();
    let wrapperMenu = document.querySelector('.hamburgers');
    wrapperMenu.classList.toggle('is-active');
    this.opened = false;
    }
  }
 

  settingsClose()
  {
    this.settingDisplay = false;
  }

  characterClose()
  {
    this.characterDisplay = false;
  }
  
      // showDialog() {
      //     this.display = true;
      // }
}
