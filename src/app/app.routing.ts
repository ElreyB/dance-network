import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CompanyComponent } from "./company/company.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AboutComponent } from "./about/about.component";
import { CompanyDetailComponent } from "./company-detail/company-detail.component";

const appRoutes: Routes = [
  {
    path: "",
    component: WelcomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "companies",
    component: CompanyComponent
  },
  {
    path: "companies/:id",
    component: CompanyDetailComponent
  }
  // {
  //   path: "add",
  //   component: AddCompanyComponent
  // },
  // {
  //   path: "admin",
  //   component: AdminComponent
  // }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
