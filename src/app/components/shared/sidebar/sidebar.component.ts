import { Component, OnInit } from '@angular/core';
import { Routes, Router, RouterModule }   from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public router: Router) { }



  ngOnInit() {
  }

}
