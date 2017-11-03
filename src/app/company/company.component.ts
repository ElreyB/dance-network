import { Component, OnInit } from "@angular/core";
import { Company } from "../company.model";
import { CompanyService } from "../company.service";
import { Router } from "@angular/router";
import { FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: "app-company",
  templateUrl: "./company.component.html",
  styleUrls: ["./company.component.css"],
  providers: [CompanyService]
})
export class CompanyComponent implements OnInit {
  companies: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private companyService: CompanyService) {}

  ngOnInit() {
    this.companies = this.companyService.getCompanies();
  }

  goToCompanyPage(clickedProject) {
    this.router.navigate(["companies", clickedProject.$key]);
  }
}
