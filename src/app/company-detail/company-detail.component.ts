import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";
import { Company } from "../company.model";
import { CompanyService } from "../company.service";
import { Router } from "@angular/router";
import { FirebaseListObservable } from "angularfire2/database";

@Component({
  selector: "app-company-detail",
  templateUrl: "./company-detail.component.html",
  styleUrls: ["./company-detail.component.css"],
  providers: [CompanyService]
})
export class CompanyDetailComponent implements OnInit {
  companyId: string;
  companyToDisplay;

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private companyService: CompanyService
  ) {}

  ngOnInit() {
    this.route.params.forEach(urlParameters => {
      this.companyId = urlParameters["id"];
    });
    this.companyToDisplay = this.companyService.getCompanyById(this.companyId);
  }
}
