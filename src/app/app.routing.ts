import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CompanyComponent } from "./company/company.component";
import { WelcomeComponent } from "./welcome/welcome.component";

const appRoutes: Routes = [
  {
    path: "",
    component: WelcomeComponent
  }
  // {
  //   path: "add",
  //   component: AddCompanyComponent
  // },
  // {
  //   path: "companys",
  //   component: CompanyComponent
  // },
  // {
  //   path: "companys/:id",
  //   component: CompanyDetailComponent
  // },
  // {
  //   path: "admin",
  //   component: AdminComponent
  // }
  // {
  //   path: 'about',
  //   component: AboutComponent
  // }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
