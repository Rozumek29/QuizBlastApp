import {Component, OnInit} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import {UserService} from "./services/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('en-US')
    translate.use(navigator.language);
  }

}
