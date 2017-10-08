import {Component, OnInit} from "@angular/core";
import {MessengerUsersService} from "./messengerUsers.service";


@Component({
    selector: 'app-messenger__main',
    templateUrl: 'messengerMain.component.html'
})

export class MessengerMainComponent implements OnInit {  

    constructor(
        private users: MessengerUsersService
    ){}

    usersData = [];

    ngOnInit() {

        this.usersData = this.users.getDataFromServer();

    }

}   