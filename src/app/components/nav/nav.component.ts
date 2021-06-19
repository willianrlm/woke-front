import {Component, OnInit} from '@angular/core';
import {UserService} from "../../service/user.service";
import {Router} from "@angular/router";
import {MessagesService} from "../../service/messages.service";
import {AuthGuard} from "../../auth/auth.guard";
import {MessageType} from "../../model/message";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  title = 'Woke';

  constructor(private userService: UserService, private router: Router, private messageService: MessagesService, private auth: AuthGuard) { }

  ngOnInit(): void {
  }

  async logout(){
    try{
      this.userService.logout()
    } catch (error){
      this.messageService.add(error, MessageType.ERROR)
    }
  }

  public show(){
    return this.auth.isActivate()
  }
}
