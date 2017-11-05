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
    this.router.navigate(["companies"]);
  }

  beginAddingMembers(companyToUpdate, membersToAdd) {
    let membersList = membersToAdd.split(/\s*,\s*/);
    membersList.forEach(member => {
      companyToUpdate.companyMembers.push(member);
    });
    this.companyService.updateCompany(companyToUpdate);
  }

  beginDeletingCompany(companyToDelete) {
    if (
      confirm("Are you sure you want to delete this company from company list?")
    ) {
      this.companyService.deleteCompany(companyToDelete);
      this.router.navigate(["companies"]);
    }
  }

  beginDeletingCompanyMember(companyToUpdate, memberToDeleteIndex) {
    companyToUpdate.companyMembers.splice(memberToDeleteIndex, 1);
    this.companyService.updateCompany(companyToUpdate);
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }
}
