import {Component, OnInit} from '@angular/core';
import {AppConstants} from "../../model/app-constants";
import {PartnersService} from "../../service/partners.service";
import {MessageType} from "../../model/message";
import {MessagesService} from "../../service/messages.service";
import {User} from "../../model/user";
import {Candidate} from "../../model/candidate";

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  retorno0 = ''
  retorno1: Candidate[] = []
  retorno1_1 = ''
  retorno2: any
  retorno2_1 = ''

  link0 = AppConstants.authenticate
  link1 = AppConstants.candidates
  link2 = AppConstants.candidateById

  constructor(private partnerService: PartnersService, private messageService: MessagesService) {
  }

  ngOnInit(): void {
  }

  getConsts() {
    return AppConstants
  }

  teste0() {
    this.partnerService.teste0(this.link0).subscribe(data => {
      if (data) {
        this.retorno0 = data.token
      } else {
        this.retorno0 = AppConstants.error
      }
    }, () => {
      this.retorno0 = AppConstants.userPassword
    })
  }

  teste1() {
    this.partnerService.teste1(this.link1, this.retorno0).subscribe(data => {
      if (data) {
        this.retorno1 = data
        this.retorno1_1 = ''
      } else {
        this.retorno1 = []
        this.retorno1_1 = AppConstants.error
      }
    }, (error) => {
      this.retorno1 = []
      this.retorno1_1 = AppConstants.communicationApiError + error.message
    })
  }

  teste2() {
    this.partnerService.teste2(this.link2, this.retorno0).subscribe(data => {
      if (data) {
        this.retorno2 = data
        this.retorno2_1 = ''
      } else {
        this.retorno2 = ''
        this.retorno2_1 = AppConstants.error
      }
    }, (error) => {
      this.retorno2 = ''
      this.retorno2_1 = AppConstants.communicationApiError + error.message
    })
  }
}
