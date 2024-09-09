import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.scss']
})
export class CredentialsComponent implements OnInit {

  searchedvalue:string=''
  display: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showDialog() {
      this.display = true;
  }


}
