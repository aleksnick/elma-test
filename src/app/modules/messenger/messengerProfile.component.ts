
import {Component, OnInit} from "@angular/core";
import {MessengerUsersService} from "./messengerUsers.service";
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';


@Component({
    selector: 'messenger-profile',
    templateUrl: 'messengerProfile.component.html'
})

export class MessengerProfileComponent implements OnInit {  

    private subscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private users: MessengerUsersService
    ){
        this.subscription = route.params.subscribe(params => {
            this.selectedId = Number.parseInt(params['id']);
            this.selectedUser = this.users.getDataByUserId(this.selectedId);
            console.log('***', this.selectedId);
        });
        console.log('subscription', this.selectedId);
    }

    usersData = [];
    selectedUser = {};
    selectedId: number = 0;

    ngOnInit() {

        this.selectedId = Number.parseInt(this.route.snapshot.paramMap.get('id'));
        this.selectedUser = this.users.getDataByUserId(this.selectedId);
        
        this.usersData = this.users.getDataFromServer();

    }

}   