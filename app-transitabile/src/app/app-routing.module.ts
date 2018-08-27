import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './views/pages/login/login.component';
import { ConfigsComponent } from './dash/configs/configs.component';
import { ContactComponent } from './dash/contact/contact.component';
import { DashboardCliComponent } from './dash/dashboard-cli/dashboard-cli.component';
import { ForgotComponent } from './views/pages/forgot/forgot.component';
import { RegisterComponent } from './views/pages/register/register.component';
import { DepositComponent } from './dash/deposit/deposit.component';
import { EditcarComponent } from './dash/editcar/editcar.component';
import { HistoryComponent } from './dash/history/history.component';
import { PaymentComponent } from './dash/payment/payment.component';
import { ProfileComponent } from './dash/profile/profile.component';
import { ReportComponent } from './dash/report/report.component';
import { ResumeComponent } from './dash/resume/resume.component';
import { SearchComponent } from './dash/search/search.component';
import { SupportComponent } from './dash/support/support.component';
import { DashtermsComponent } from './dash/dashterms/dashterms.component';
import { VehiclesComponent } from './dash/vehicles/vehicles.component';
import { TermsComponent } from './views/pages/terms/terms.component';
import { HomeComponent } from './dash/home/home.component';

const routes: Routes = [
  {
    path: '',
        redirectTo: 'login',
        pathMatch: 'full'
  },
  {
      path: 'login',
      component: LoginComponent
  },
  {
      path: 'terms',
      component: TermsComponent
  },
  {
      path: 'forgot',
      component: ForgotComponent
  },
  {
      path: 'register',
      component: RegisterComponent
  },
  {
      path: 'dashboard-cli',
      component: DashboardCliComponent,
      children: [
          {
      path: '',
      component: HomeComponent,
      outlet: 'dash_router'
      // canActivate: [AuthGuardService]
  },
          {
      path: '',
      component: ConfigsComponent,
      outlet: 'dash_router'
      // canActivate: [AuthGuardService]
  },
  {
      path: '',
      component: ContactComponent,
      outlet: 'dash_router'
      // canActivate: [AuthGuardService]
  },
  {
      path: '',
      component: DepositComponent,
      outlet: 'dash_router'
      // canActivate: [AuthGuardService]
  },
  {
      path: '',
      component: EditcarComponent,
      outlet: 'dash_router'
      // canActivate: [AuthGuardService]
  },
  {
      path: '',
      component: HistoryComponent,
      outlet: 'dash_router'
      // canActivate: [AuthGuardService]
  },
  {
      path: '',
      component: PaymentComponent,
      outlet: 'dash_router'
      // canActivate: [AuthGuardService]
  },
  {
      path: 'profile',
      component: ProfileComponent,
      outlet: 'dash_router'
      // canActivate: [AuthGuardService]
  },
  {
      path: '',
      component: ReportComponent,
      outlet: 'dash_router'
      // canActivate: [AuthGuardService]
  },
  {
      path: '',
      component: ResumeComponent,
      outlet: 'dash_router'
      // canActivate: [AuthGuardService]
  },
  {
      path: '',
      component: SearchComponent,
      outlet: 'dash_router'
      // canActivate: [AuthGuardService]
  },
  {
      path: '',
      component: SupportComponent,
      outlet: 'dash_router'
      // canActivate: [AuthGuardService]
  },
  {
      path: '',
      component: DashtermsComponent,
      outlet: 'dash_router'
      // canActivate: [AuthGuardService]
  },
  {
      path: '',
      component: VehiclesComponent,
      outlet: 'dash_router'
      // canActivate: [AuthGuardService]
  }
      ]
      // canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
