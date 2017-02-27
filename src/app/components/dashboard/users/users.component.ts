import { Component, OnInit } from '@angular/core';
import { Ng2SmartTableModule, LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {




constructor() {

}

  ngOnInit() {
  }



settings = {
  columns: {

    username: {
      title: 'User Name'

    },
    email: {
      title: 'Email'
    },
      alive: {
      title: 'Active'
    }
  }
};


data = [
  {
    id: 1,
    alive: true,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz"
  },
  {
    id: 2,
    alive: true,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv"
  },

  {
    id: 10 ,
    alive: false,
    name: "Jon Snow",
    username: "Jon.Snow",
    email: "Jon.Snow@thewall.biz"
  },
  {
    id: 11 ,
    alive: true,
    name: "Nicholas DuBuque",
    username: "Nicholas.Stanton",
    email: "Rey.Padberg@rosamond.biz"
  }
];







}
