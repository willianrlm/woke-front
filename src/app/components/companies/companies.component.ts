import {Component, OnInit} from '@angular/core';
import {Company} from "../../model/company";
import {CompanyService} from "../../service/company.service";
import {Candidate, OpinionType} from "../../model/candidate";
import {UserService} from "../../service/user.service";
import {MessageType} from "../../model/message";
import {MessagesService} from "../../service/messages.service";
import {AppConstants} from "../../model/app-constants";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companies: Company[] = []

  constructor(private companyService: CompanyService, private userService: UserService, private messageService: MessagesService) {
  }

  ngOnInit(): void {
    this.getCompanies()
    this.messageService.clear()
  }

  getCompanies(): void {
    this.companyService.getAll().subscribe(
      companies => {
        this.companies = companies
        console.log(companies)
      }
    )
  }

  public opine(company: Company, type: string) {
    if (company.candidate != null) {
      company.candidate.opinion = Candidate.getType(type)
    } else {
      company.candidate = new Candidate(0, new Date().toJSON("dd/MM/yyyy HH:mm:ss"), Candidate.getType(type), this.userService.getUser(), company.id)
    }
    this.companyService.candidate(company).subscribe(data => {
      if (data) {
        this.messageService.add("Opinião atualizada!", MessageType.SUCCESS)
        company.candidate.id = data.id
      } else {
        this.messageService.add(AppConstants.error, MessageType.ERROR)
      }
    }, () => {
      this.messageService.add(AppConstants.communicationApiError, MessageType.ERROR)
    })
  }

  public isPositive(company: Company) {
    return company.candidate !== null && company.candidate.opinion !== null && company.candidate.opinion === OpinionType.POSITIVE
  }

  public isNegative(company: Company) {
    return company.candidate !== null && company.candidate.opinion !== null && company.candidate.opinion === OpinionType.NEGATIVE
  }

  public isNeutral(company: Company) {
    return company.candidate !== null && company.candidate.opinion !== null && company.candidate.opinion === OpinionType.NEUTRAL
  }
}
