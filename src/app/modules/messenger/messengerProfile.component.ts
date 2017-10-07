
import {Component, OnInit} from "@angular/core";
import {MessengerUsersService} from "./messengerUsers.service";
import {Router, ActivatedRoute, ParamMap} from '@angular/router';


@Component({
    selector: 'profile-component',
    templateUrl: 'messengerProfile.component.html'
})

export class MessengerProfileComponent implements OnInit {  

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private users: MessengerUsersService
    ){

        console.log('?????');
    }


    ngOnInit() {

        let id = this.route.snapshot.paramMap.get('id');


        console.log('go!!!!!!!!!!!!', this.route.snapshot.paramMap.get('id'));

    }


}   