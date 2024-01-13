import {Component, OnInit} from '@angular/core';
import {TokenService} from "../../services/token.service";
import {UserService} from "../../services/user.service";
import {IUserDetails} from "../../models/user.model";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  isCollapsed = false;
  breadcrumb: string[]
  user: IUserDetails;
  profileVisible: boolean = false;

  constructor(private tokenService: TokenService, private userService: UserService) {

  }

  ngOnInit(): void {
    this.userService.userInfo().subscribe({
      next:(response) => {
          this.user = response;
      },
      error: error => {
        console.error(error)
        this.tokenService.removeToken();
      }
    })
    this.breadcrumb = location.pathname.split('/')
  }

  logout(): void {
    this.tokenService.removeToken();
  }
}
