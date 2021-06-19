import {Injectable} from '@angular/core';
import {Message, MessageType} from "../model/message";

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages: Message[] = []

  constructor() {
  }

  add(value: string, type: MessageType) {
    if(this.messages.length > 1){
      this.messages.splice(0, 1)
    }
    let time = new Date().toJSON("dd/MM/yyyy HH:mm:ss")
    this.messages.push({value, type, time})
  }

  clear() {
    this.messages = []
  }

  getMessages(){
    return this.messages
  }
}
