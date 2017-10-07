import {Component, OnInit} from "@angular/core";
import {MessengerUsersService} from "./messengerUsers.service";
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';


@Component({
    selector: '#app-messenger',
    templateUrl: 'messenger.component.html'
})

export class MessengerComponent implements OnInit {  

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private users: MessengerUsersService
    ){}

    title: string = 'Welcome';
    selected_id: number = 0;
    usersData = [];

    ngOnInit() {

        let id = this.route.snapshot.paramMap.get('id');

        console.log(this.title);

        this.usersData = this.users.getDataFromServer();

        console.log('go!', this.route.snapshot.paramMap.get('id'));

    }

}   