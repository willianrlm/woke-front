import {Component, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {UserService} from "../../service/user.service";
import {Contact} from "../../model/contact";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User
  contacts: Contact[] = []
  newContact: Contact

  constructor(private userService: UserService, private router: Router) {
    this.user = this.getUser()
    this.newContact = this.resetContact()
  }

  ngOnInit(): void {
  }

  getUser() {
    this.user = this.userService.getUser()
    this.contacts = this.user.person.contacts

    return this.user
  }

  removeContact(contact: Contact) {
    let index: number = this.contacts.indexOf(contact)
    if (index !== -1) {
      this.contacts.splice(index, 1)
    }
  }

  addContact() {
    this.newContact.id = -this.contacts.length
    this.contacts.push(this.newContact)
    console.log(this.contacts)
    this.newContact = this.resetContact()
  }

  resetContact() {
    return {id: 0, value: '', type: 'EMAIL'}
  }

  onSubmit() {
    this.user.person.contacts = this.contacts
    this.userService.update(this.user)
    this.router.navigate(['/profile'])
  }
}
