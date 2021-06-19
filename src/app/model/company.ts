import {Candidate, OpinionType} from "./candidate";

export class Company {
  id: number
  name: string
  description: string
  candidate: Candidate

  constructor(id: number, name: string, description: string, candidate: Candidate) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.candidate = candidate;
  }
}
