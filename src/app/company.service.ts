import { Injectable } from "@angular/core";
import { Company } from "./company.model";
import {
  AngularFireDatabase,
  FirebaseListObservable
} from "angularfire2/database";

@Injectable()
export class CompanyService {
  companies: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.companies = database.list("companies");
  }

  getCompanies() {
    return this.companies;
  }

  addCompany(newCompany: Company) {
    this.companies.push(newCompany);
  }

  getCompanyById(companyId: string) {
    return this.database.object("companies/" + companyId);
  }
}
