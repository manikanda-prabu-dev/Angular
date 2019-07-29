
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { ApiService } from '../api.service';
import { SessionStorageService } from "angular-web-storage";
import { User } from "../user";



@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  response: any;
  constructor(
    private router: Router,
    private https: HttpClient,
    public appService: ApiService,
    private session: SessionStorageService
  ) {}



  message = "";
  errorMessage = "";
  hasError = false;




  // Checking for an error @ given link...............................
  ngOnInit() {
    this.https.get(this.appService.baseUrl).subscribe(
      data => {
        this.response = data;
        const users: User[] = this.response["data"];
        console.log(users);
      },
      error => {
        this.hasError = true;

        if (error.status == 200) {
          this.errorMessage = error.status + " Success";
          console.log("error message:", this.errorMessage);
        } else {
          this.errorMessage = error.status + " " + error.statusText;
          console.log("error message:", this.errorMessage);
          console.log(error);
        }
      }
    );
  }




  //Validating the Form before submission.............................
  validation(event) {
    event.preventDefault();
    var name :string = event.target.querySelector("#name").value;
    var email: string = event.target.querySelector("#email").value;
    var password: string = event.target.querySelector("#pw").value;

    this.https.get(this.appService.baseUrl).subscribe
    (data => { this.response = data;
      const users: User[] = this.response["data"];
      if (
        users.find(user => user.email === email) &&
        users.find(user => user.first_name === name)&&
        users.find(user => user.last_name === password)
      ) {
        this.session.set("UserName", name);
        this.session.set("UserEmail", email);
        this.session.set("UserPassword", password);
        this.session.set("isLoggedIn", true);
        this.router.navigateByUrl("/welcome");
      } else {
        this.session.set("isLoggedIn", false);
        this.message = "!!..Please enter existing email and password..!!";
      }
      if (email == "" && password == "" && name == "") {
        this.message = "!!..email and password cannot be empty..!!";
      }
    });
  }



  // error retry button to navigate to URL...........................
  retry() {
    if (this.hasError == true) {
      console.log(this.appService.baseUrl);
      return this.ngOnInit();
    } else {
 
      this.router.navigateByUrl("/login");
    }
  }



}

