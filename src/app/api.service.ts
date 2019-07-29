import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl:string = "https://reqres.in/api/users";
  constructor(public http: HttpClient){}
  getData(){
      return this.http.get(this.baseUrl);
  }
}
