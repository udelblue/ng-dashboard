import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css']
})
export class RolesComponent implements OnInit {

  Roles: any = [{role: "ReadOnlyUser", active:true} , {role: "ReadAndWriteUser" , active:true}, {role: "LocalAdmin" , active:true}, {role: "GlobalAdmin" , active:true}]


  constructor() { }

  ngOnInit() {
  }

}
