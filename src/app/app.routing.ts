import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CompanyComponent } from "./company/company.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AboutComponent } from "./about/about.component";

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
  }
  // {
  //   path: "add",
  //   component: AddCompanyComponent
  // },
  // {
  //   path: "companys/:id",
  //   component: CompanyDetailComponent
  // },
  // {
  //   path: "admin",
  //   component: AdminComponent
  // }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
