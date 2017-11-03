import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CompanyComponent } from "./company/company.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AboutComponent } from "./about/about.component";
import { CompanyDetailComponent } from "./company-detail/company-detail.component";
import { AdminComponent } from "./admin/admin.component";
import { AddCompanyComponent } from "./add-company/add-company.component";

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
  },
  {
    path: "admin",
    component: AdminComponent
  },
  {
    path: "add",
    component: AddCompanyComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
