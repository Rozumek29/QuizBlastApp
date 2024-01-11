import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../services/token.service";
import {IUser} from "../../models/auth.model";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  isCollapsed = false;
  breadcrumb: string[]
  user: IUser | null;

  constructor(private tokenService: TokenService) {

  }

  ngOnInit(): void {
    this.user = this.tokenService.getUser();
    this.breadcrumb = location.pathname.split('/')
  }

  logout(): void {
    this.tokenService.removeToken();
  }

}
