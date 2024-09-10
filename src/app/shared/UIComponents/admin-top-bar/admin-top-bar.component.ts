import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-top-bar',
  templateUrl: './admin-top-bar.component.html',
  styleUrls: ['./admin-top-bar.component.scss']
})
export class AdminTopBarComponent implements OnInit {
  isMenuVisible: boolean = false;

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible;
  }

  logout(){
    this.router.navigate(['/login'])
  }


}
