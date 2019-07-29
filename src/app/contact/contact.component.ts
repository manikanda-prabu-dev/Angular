import { Component, OnInit } from '@angular/core';
import { SessionStorageService }from 'angular-web-storage';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  inputNameFromOtherComponent="";
  inputEmailFromOtherComponent ="";

  constructor(private session:SessionStorageService) { }

  ngOnInit() {
    this.inputNameFromOtherComponent = this.session.get("UserName");
    this.inputEmailFromOtherComponent = this.session.get("UserEmail");
  }
feedback(event){
  event.preventDefault();
  var name :string = event.target.querySelector("#name").value;
  var email: string = event.target.querySelector("#email").value;
  var feedback: string = event.target.querySelector("#message").value;

  this.session.set("UserName",name);
  this.session.set("UserEmail",email);
  this.session.set("Message",feedback);
}
}
