export class Contact {
  id: number
  value: string
  type: string

  constructor(id: number, value: string, type: string) {
    this.id = id;
    this.value = value;
    this.type = type;
  }
}
