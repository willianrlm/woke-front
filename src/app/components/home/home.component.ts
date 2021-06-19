import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {MessagesService} from "../../service/messages.service";
import {User} from "../../model/user";
import {MessageType} from "../../model/message";
import {AuthGuard} from "../../auth/auth.guard";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User

  constructor(private userService: UserService, private router: Router, private messageService: MessagesService, private auth: AuthGuard) {
    this.user = this.getUser()
  }

  ngOnInit(): void {
    if(this.auth.isActivate()){
      this.router.navigate(['/profile'])
    }
  }

  private getUser(): User {
    return this.userService.getUser()
  }

  async onSubmit() {
    try {
      this.userService.authenticate(this.user)
    } catch (error) {
      this.messageService.add(error, MessageType.ERROR)
    }
  }
}
