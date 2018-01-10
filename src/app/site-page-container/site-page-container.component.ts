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
   //add function to find out if its day or night then set day variable
  }
  day: boolean = true;
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
      clouds(){
        var data;
        if (this.day){
          alert('true')
          data = {
            'background': 'transparent url(../../assets/clouds.png) repeat top left',
            'z-index': '3',
            '-moz-animation': 'move-clouds-back 200s linear infinite',
            '-ms-animation': 'move-clouds-back 200s linear infinite',
            '-o-animation': 'move-clouds-back 200s linear infinite',
            '-webkit-animation': 'move-clouds-back 200s linear infinite',
            'animation': 'move-clouds-back 200s linear infinite'
          }
        }
        else{
          data = {}
        }
        return data;
      }

      DayorNight() {
        var data;
        if (this.day){
          data = {
            'width': '100%',
            'height': '100vh',
            'background-image': 'linear-gradient(#236BDE,#90C3D4)', //#0290BF
            'z-index': '1'
          }
        }
        else{
          data = {
            'width': '100%',
            'height': '100vh',
            'background-image': 'url(../../assets/stars.png), linear-gradient(#000, #236BDE)',
            'z-index': '1'
          }
        }
        return data;
      }
}

