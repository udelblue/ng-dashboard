import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotfoundComponent } from './components/shared/notfound/notfound.component';

import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { ReportsComponent } from './components/dashboard/reports/reports.component';

import { ClientsComponent } from './components/dashboard/clients/clients.component';
import { UsersComponent } from './components/dashboard/users/users.component';
import { RolesComponent } from './components/dashboard/roles/roles.component';



// , canActivate: [LoggedInGuard]
const appRoutes: Routes = [
    { path: 'home', redirectTo: '/', pathMatch: 'full' },
    { path: '', component: OverviewComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'clients', component: ClientsComponent },
    { path: 'roles', component: RolesComponent },
    { path: 'users', component: UsersComponent},
   // { path: 'search', component: SearchComponent, canActivate: [LoggedInGuard] },
   // { path: 'birth-form/:id/:section', component: BirthFormComponent, canActivate: [LoggedInGuard], canDeactivate: [DirtyFormGuard] },
   // { path: 'birth-form/:id', component: BirthFormComponent, canActivate: [LoggedInGuard] },
   // { path: 'birth-form-2', component: BirthForm2Component, canActivate: [LoggedInGuard] },
   //{ path: 'birth-form-3', component: BirthForm3Component, canActivate: [LoggedInGuard] },

   // { path: 'login', component: LoginComponent },
   // { path: 'logout', component: LogoutComponent },
   // { path: 'landing-portal', component: LandingPortalComponent },
   // { path: 'signature', component: SignatureComponent },
   // { path: 'messages', component: MessagesComponent, canActivate: [LoggedInGuard] },
   // { path: 'messages/:folder', component: MessagesComponent, canActivate: [LoggedInGuard] },
   // { path: 'landing-location', component: LandingLocationComponent, canActivate: [LoggedInGuard] },
   // { path: 'active-records', component: ActiveRecordsComponent, canActivate: [LoggedInGuard] },
   // { path: 'work-queue', component: WorkQueueComponent, canActivate: [LoggedInGuard] },
    { path: '404', component: NotfoundComponent },
    { path: '**', redirectTo: "/404" }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }