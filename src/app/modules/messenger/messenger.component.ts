import {Component, OnInit} from "@angular/core";
import {MessengerUsersService} from "./messengerUsers.service";


@Component({
    selector: '#app-messenger',
    templateUrl: 'messenger.component.html'
})

export class MessengerComponent implements OnInit {  

  title: string = 'Welcome';
  usersData = [];

  ngOnInit() {

  	var users = new MessengerUsersService();
  	this.usersData = users.getDataFromServer();




  	console.log('go!');
  	console.log();
  }

}	