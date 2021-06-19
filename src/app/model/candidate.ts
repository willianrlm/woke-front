import {User} from "./user";
import {Company} from "./company";

export class Candidate {
  id: number
  dateApplication: string
  opinion: OpinionType
  user: User
  company: number

  constructor(id: number, dateApplication: string, opinion: OpinionType, user: User, company: number) {
    this.id = id;
    this.dateApplication = dateApplication;
    this.opinion = opinion;
    this.user = user;
    this.company = company;
  }

  public static getType(type: string): OpinionType{
    return type === OpinionType.POSITIVE? OpinionType.POSITIVE :
      (type === OpinionType.NEUTRAL? OpinionType.NEUTRAL :
        (type === OpinionType.NEGATIVE? OpinionType.NEGATIVE :
          OpinionType.NEUTRAL))
  }
}

export enum OpinionType{
  POSITIVE = 'POSITIVE',
  NEUTRAL = 'NEUTRAL',
  NEGATIVE = 'NEGATIVE',
}
