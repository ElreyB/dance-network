import { Component, Input, OnInit } from "@angular/core";
import { CompanyService } from "../company.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-edit-company",
  templateUrl: "./edit-company.component.html",
  styleUrls: ["./edit-company.component.css"],
  providers: [CompanyService]
})
export class EditCompanyComponent implements OnInit {
  @Input() selectedCompany;

  constructor(private companyService: CompanyService, private router: Router) {}

  ngOnInit() {}

  beginUpdatingCompany(companyToUpdate) {
    this.companyService.updateCompany(companyToUpdate);
    this.router.navigate(["componies"]);
  }

  beginDeletingCompany(companyToDelete) {
    if (
      confirm("Are you sure you want to delete this company from company list?")
    ) {
      this.companyService.deleteCompany(companyToDelete);
    }
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }
}
