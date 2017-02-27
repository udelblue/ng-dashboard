import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';



import {OverviewService} from '../../../services/overview.service';



@Component({
  selector: 'app-overview',

  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  providers: [OverviewService]
})
export class OverviewComponent implements OnInit {



  constructor(private overviewService: OverviewService) { }
  ngOnInit() {
  }

  UserCount(){ return this.overviewService.UserCount};
  ClientCount(){ return this.overviewService.ClientCount};
  RolesCount(){ return  this.overviewService.RolesCount};
}
