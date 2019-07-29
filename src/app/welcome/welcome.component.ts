import { Component, OnInit } from '@angular/core';
import { SessionStorageService }from 'angular-web-storage';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  inputFromOtherComponent="";

  constructor(private session:SessionStorageService) { }

  ngOnInit() {
    this.inputFromOtherComponent = this.session.get("UserName");
  }

}
