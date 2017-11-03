import { Component, OnInit } from "@angular/core";
import { Company } from "../company.model";
import { CompanyService } from "../company.service";
import { Router } from "@angular/router";
import { FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: "app-add-company",
  templateUrl: "./add-company.component.html",
  styleUrls: ["./add-company.component.css"],
  providers: [CompanyService]
})
export class AddCompanyComponent implements OnInit {
  constructor(private companyService: CompanyService, private router: Router) {}

  ngOnInit() {}

  submitNewCompany(
    companyName: string,
    type: string,
    choreographer: string,
    companyMembers: string,
    about: string,
    website: string
  ) {
    let newCompany: Company = new Company(
      companyName,
      type,
      choreographer,
      companyMembers.split(","),
      about,
      website
    );
    this.companyService.addCompany(newCompany);
    this.router.navigate(["companies"]);
  }
}
