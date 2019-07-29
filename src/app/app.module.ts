import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule,route } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { AngularWebStorageModule } from 'angular-web-storage';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ApiService } from './api.service';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WelcomeComponent,
    route,
    HeaderComponent,
    ServicesComponent,
    ContactComponent,
    FooterComponent,
    
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularWebStorageModule,
  ],
  providers: [AuthGuard,HttpClientModule,ApiService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
