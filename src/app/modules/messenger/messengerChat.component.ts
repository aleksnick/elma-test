
import {Component, OnInit} from "@angular/core";
import {MessengerUsersService} from "./messengerUsers.service";
import {Router, ActivatedRoute, ParamMap} from '@angular/router';


@Component({
    selector: 'messenger-chat',
    templateUrl: 'messengerChat.component.html'
})

export class MessengerChatComponent implements OnInit {  

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private users: MessengerUsersService
    ){}

    usersData = [];

    ngOnInit() {

        this.usersData = this.users.getDataFromServer();

        console.log('Start MessengerChatComponent...', this.route.snapshot.paramMap.get('id'));

    }

}   