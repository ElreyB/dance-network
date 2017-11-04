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

  // addToCompanyMembers(companyToUpdateMembers, companyMembers) {
  //   let companyEntryInFirebase = this.getCompanyById(
  //     companyToUpdateMembers.$key
  //   );
  //   companyEntryInFirebase.companyMembers.forEach(member);
  // }

  getCompanyById(companyId: string) {
    return this.database.object("companies/" + companyId);
  }

  updateCompany(localUpdateCompany) {
    let companyEntryInFirebase = this.getCompanyById(localUpdateCompany.$key);
    companyEntryInFirebase.update({
      companyName: localUpdateCompany.companyName,
      type: localUpdateCompany.type,
      choreographer: localUpdateCompany.choreographer,
      companyMembers: localUpdateCompany.companyMembers,
      about: localUpdateCompany.about,
      website: localUpdateCompany.website
    });
  }

  deleteCompany(localCompanyToDelete) {
    let companyEntryInFirebase = this.getCompanyById(localCompanyToDelete.$key);
    companyEntryInFirebase.remove();
  }
}
