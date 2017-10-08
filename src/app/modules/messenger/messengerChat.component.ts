
import {Component, OnInit, OnDestroy} from "@angular/core";
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {MessengerUsersService} from "./messengerUsers.service";
import {MessengerUsersDetailService} from "./messengerUsersDetail.service";

@Component({
    selector: 'app-messenger__chat',
    templateUrl: 'messengerChat.component.html'
})

export class MessengerChatComponent implements OnInit, OnDestroy {  

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

    usersOnline = [];
    usersAway = [];
    usersBusy = [];
    usersOffline = [];
    selectedUser = {};
    selectedId: number = 0;

    ngOnInit() {

        this.selectedId = Number.parseInt(this.route.snapshot.paramMap.get('id'));
        this.selectedUser = this.usersDetail.getDataByUserId(this.selectedId);

        this.usersOnline = this.users.getDataByUserStatus('online');
        this.usersAway = this.users.getDataByUserStatus('away');
        this.usersBusy = this.users.getDataByUserStatus('busy');
        this.usersOffline = this.users.getDataByUserStatus('offline');

    }

    ngOnDestroy() {

        this.subscription.unsubscribe();

    }

}   