import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, NonNullableFormBuilder, Validators} from "@angular/forms";
import {IUserDetails} from "../../../models/user.model";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{
  title:string = "Profile";

  @Input() isVisible: boolean = false;
  @Output() isVisibleChange: EventEmitter<boolean> = new EventEmitter<boolean>()

  @Input('user') user: IUserDetails;

  constructor(private fb: NonNullableFormBuilder) {

  }

  profileForm : FormGroup<{
    email: FormControl<string>;
    firstName: FormControl<string>
    lastName: FormControl<string>
  }>


  close() {
    this.isVisible = !this.isVisible;
    this.isVisibleChange.emit(this.isVisible);
  }

  ngOnInit(): void {
    this.profileForm = this.fb.group({
      email: [this.user.Email, [Validators.email]],
      firstName: [this.user.FirstName,],
      lastName: [this.user.LastName]
    })
  }


}
