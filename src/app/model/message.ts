export class Message{
  value: string
  type: MessageType
  time: string

  constructor(value: string, type: MessageType, time: string) {
    this.value = value;
    this.type = type;
    this.time = time
  }
}

export enum MessageType{
  SUCCESS,
  ERROR,
  WARNING
}
