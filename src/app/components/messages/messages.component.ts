import {Component, OnInit} from '@angular/core';
import {MessagesService} from "../../service/messages.service";
import {Message, MessageType} from "../../model/message";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Message[] = []

  constructor(private messageService: MessagesService) {
  }

  ngOnInit(): void {
    this.messages = this.messageService.getMessages()
  }

  closeThis(message: Message){
    let index = this.messages.indexOf(message)
    this.messages.splice(index, 1)
  }

  getMessageClass(message: Message): string{
    let c = 'alert-success'
    if(this.isWarning(message)){
      return 'alert-warning'
    }else if(this.isDanger(message)){
      return 'alert-danger'
    }
    return c
  }

  isWarning(message: Message): boolean{
    return message.type === MessageType.WARNING
  }

  isDanger(message: Message): boolean{
    return message.type === MessageType.ERROR
  }

  isSuccess(message: Message): boolean{
    return message.type === MessageType.SUCCESS
  }
}
