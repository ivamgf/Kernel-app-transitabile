import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './views/pages/login/login.component';
import { NavComponent } from './views/nav/nav.component';
import { FooterComponent } from './views/footer/footer.component';
import { DashboardCliComponent } from './dash/dashboard-cli/dashboard-cli.component';
import { ProfileComponent } from './dash/profile/profile.component';
import { SearchComponent } from './dash/search/search.component';
import { VehiclesComponent } from './dash/vehicles/vehicles.component';
import { HistoryComponent } from './dash/history/history.component';
import { ConfigsComponent } from './dash/configs/configs.component';
import { SupportComponent } from './dash/support/support.component';
import { ContactComponent } from './dash/contact/contact.component';
import { DepositComponent } from './dash/deposit/deposit.component';
import { EditcarComponent } from './dash/editcar/editcar.component';
import { PaymentComponent } from './dash/payment/payment.component';
import { ReportComponent } from './dash/report/report.component';
import { ResumeComponent } from './dash/resume/resume.component';
import { SideComponent } from './views/side/side.component';
import { TermsComponent } from './views/pages/terms/terms.component';
import { ForgotComponent } from './views/pages/forgot/forgot.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { DashtermsComponent } from './dash/dashterms/dashterms.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    FooterComponent,
    DashboardCliComponent,
    ProfileComponent,
    SearchComponent,
    VehiclesComponent,
    HistoryComponent,
    ConfigsComponent,
    SupportComponent,
    ContactComponent,
    DepositComponent,
    EditcarComponent,
    PaymentComponent,
    ReportComponent,
    ResumeComponent,
    SideComponent,
    TermsComponent,
    ForgotComponent,
    RegisterComponent,
    DashtermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
