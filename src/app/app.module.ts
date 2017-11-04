import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { masterFirebaseConfig } from "./api-keys";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule } from "angularfire2/database";
import { routing } from "./app.routing";
import { AngularFireAuthModule } from "angularfire2/auth";

import { AppComponent } from "./app.component";
import { CompanyComponent } from "./company/company.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { AboutComponent } from "./about/about.component";
import { CompanyDetailComponent } from "./company-detail/company-detail.component";
import { EditCompanyComponent } from "./edit-company/edit-company.component";
import { AdminComponent } from "./admin/admin.component";
import { AddCompanyComponent } from "./add-company/add-company.component";
import { TypePipe } from "./type.pipe";
import { NamePipe } from "./name.pipe";

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    WelcomeComponent,
    AboutComponent,
    CompanyDetailComponent,
    EditCompanyComponent,
    AdminComponent,
    AddCompanyComponent,
    TypePipe,
    NamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
