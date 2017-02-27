import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, XHRBackend, Http, RequestOptions  } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing.module';

//services
import { OverviewService} from './services/overview.service';

//third party modules
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { ModalModule, DropdownModule } from 'ng2-bootstrap';

//components
import { AppComponent } from './app.component';
import { NotfoundComponent } from './components/shared/notfound/notfound.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { OverviewComponent } from './components/dashboard/overview/overview.component';
import { ReportsComponent } from './components/dashboard/reports/reports.component';
import { ClientsComponent } from './components/dashboard/clients/clients.component';
import { UsersComponent } from './components/dashboard/users/users.component';
import { RolesComponent } from './components/dashboard/roles/roles.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    OverviewComponent,
    NotfoundComponent,
    ReportsComponent,
    ClientsComponent,
    RolesComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    Ng2SmartTableModule,
    ModalModule.forRoot(),
    DropdownModule.forRoot(),
    FormsModule,
    HttpModule,
      AppRoutingModule,
    ReactiveFormsModule
   
  ],
  providers: [OverviewService],
  bootstrap: [AppComponent]
})
export class AppModule { }
