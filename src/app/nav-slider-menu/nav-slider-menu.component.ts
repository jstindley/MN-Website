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
      option: 'Mars',
      name: 'Mars Neptune',
      quote:`Saving McPluto is my obligation`,
      bio: `As captain of the Mercury Phoenix, 
            Mars Neptune is the prophesized hero of the McPlutoian civilization.  
            Son of Delton and Aloea, Mars has prominent legacy to uphold.  
            He however wants no part of the prestige and pressure that come with his name.
            Although reluctant he has made a vow to his people to find 'The World' 
            and find a new home for is people.`
    },
    {
      option: 'Real',
      name: 'Real McReal',
      quote:`Doesn't get any realer than Real`,
      bio: `Arrogant and self centered, Real McReal cares about 2 things: glory and himself.  
            Joining his rival Mars as first mate wasn’t ideal for him but if they save McPluto he will live the rest of his days a hero.
            And a hero he shall be because he can be nothing less.  
            Although he is under pressure to join the long line of heroes in his family, Real will be Real and make it happen somehow.`
    },
    {
      option: 'Owl',
      name: 'Owl',
      quote:`Knowledge is a more powerful weapon`,
      bio: `A refugee from a former neighboring planet, Owl has seen the fate lies ahead of McPluto.  
      Logic is what runs Owl as he considers all factors and possibilities in his interactions.  
      As the adviser on ship, he is to help Mars find a new planet for the McPlutoian people and navigate the stars.  
      He is the voice of reason and often tries to keep his sister Heron out of conflict.`
    },
    {
      option: 'Heron',
      name: 'Heron',
      quote:`I am not just as good. I am better`,
      bio: `Refugee from a former neighboring planet, Heron the younger of the Avian twins is the only female crewmember aboard the Mercury Phoenix.  
      Fueled by the notion she has to constantly prove herself she is up for any and every challenge.  
      She wants the same respect everyone else receives and will fight for it to the end.  
      She will not ask you for help or need you to save her. 
      She is going to save you.`    
    },
    {
      option: 'BVD4',
      name: 'Blake Von Ducan IV',
      quote:`Aren't you glad I decided to be here?`,
      bio: `A cunning young trickster, Blake is the youngest of the crew and uses wit to get out of dangerous situations.  
      As an orphan he was undersized and had to use his tricks and persuasion to get by.  
      Now at 16 he has convince the Mercury Phoenix crew they need a guy with the gift of gab.  
      He is annoying and unpredictable a bit too much for his own well being.`
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
