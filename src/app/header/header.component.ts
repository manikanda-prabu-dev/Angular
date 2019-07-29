import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SessionStorageService } from "angular-web-storage";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private session: SessionStorageService) { }

  ngOnInit() {
  }
 logout(){
  this.session.clear();
  this.router.navigateByUrl("/login");
  console.log(this.session);
  
 }
}
