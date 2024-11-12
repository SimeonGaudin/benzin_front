import { Component, EventEmitter,OnInit,Output } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

export interface boutonHeader {
  id: number;
  name: string;
  url: string[];
  isDark: boolean;
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  @Output() public isOpenEmitter = new EventEmitter<boolean>();

  public isOpen: boolean = false;
  
  public boutonsHeader: boutonHeader[] = [
    {
      id: 0,
      name: '....',
      url: [''],
      isDark: true,
    },
    {
      id: 1,
      name: 'Acheter',
      url: ['/Acheter'],
      isDark: true,
    },
    {
      id: 2,
      name: 'Vendre',
      url: ['/Vendre'],
      isDark: true,
    },
    {
      id: 3,
      name: 'Rouler',
      url: [''],
      isDark: true,
    },
    {
      id: 4,
      name: 'Shop',
      url: [''],
      isDark: true,
    },
    {
      id: 5,
      name: 'Search',
      url: [''],
      isDark: true,
    },
    {
      id: 6,
      name: 'Notification',
      url: [''],
      isDark: true,
    },
    {
      id: 7,
      name: 'Connexion',
      url: ['/connexion'],
      isDark: true,
    },
  ];
  
  public isConnected: boolean = false;
  public isMenuOpen: any;
  public onLogout() {
    throw new Error('Method not implemented.');
  }

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  public onBurgerClick(): void {
    this.isOpen = !this.isOpen;
    this.isOpenEmitter.emit(this.isOpen);
  }

}
