import { Component, OnInit } from "@angular/core";
import { Company } from "../company.model";
import { CompanyService } from "../company.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css"]
})
export class WelcomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}
}
