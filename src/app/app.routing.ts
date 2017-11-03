import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const appRoutes: Routes = [
  // {
  //   path: "",
  //   component: WelcomeComponent
  // },
  // {
  //   path: "add",
  //   component: AddProjectComponent
  // },
  // {
  //   path: "projects",
  //   component: ProjectComponent
  // },
  // {
  //   path: "projects/:id",
  //   component: ProjectDetailComponent
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
