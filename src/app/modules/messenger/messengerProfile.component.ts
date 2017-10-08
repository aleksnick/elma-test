
import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {MessengerUsersService} from "./messengerUsers.service";
import {MessengerUsersDetailService} from "./messengerUsersDetail.service";


@Component({
    selector: 'app-messenger__profile',
    templateUrl: 'messengerProfile.component.html'
})

export class MessengerProfileComponent implements OnInit, OnDestroy {  

    private subscription: Subscription;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private users: MessengerUsersService,
        private usersDetail: MessengerUsersDetailService
    ){
        this.subscription = route.params.subscribe(params => {
            this.selectedId = Number.parseInt(params['id']);
            this.selectedUser = this.usersDetail.getDataByUserId(this.selectedId);
        });
    }

    usersData = [];
    selectedUser = {};
    selectedId: number = 0;

    ngOnInit() {

        this.selectedId = Number.parseInt(this.route.snapshot.paramMap.get('id'));
        this.selectedUser = this.usersDetail.getDataByUserId(this.selectedId);
        
        this.usersData = this.users.getDataFromServer();

    }

    ngOnDestroy() {

        this.subscription.unsubscribe();

    }

}   