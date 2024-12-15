import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any = null;
  username: string = '';
  searchForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) {
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

  ngOnInit(): void {
    this.user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '{}') : null;
    this.username = this.user ? this.user.name : '';
  }


  signup() {
    this.router.navigateByUrl('/signup');
  }

  signin() {
    this.router.navigateByUrl('/signin');
  }

  logout() {
    localStorage.removeItem('isConnected');
    localStorage.removeItem('user');
    this.router.navigateByUrl('/').then(() => {
      window.location.reload();
    });
  }

  home() {
    this.router.navigateByUrl('/');
  }

  sell() {
    this.router.navigateByUrl('/sell');
  }
}