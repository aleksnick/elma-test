
import { _ } from 'underscore';
import {Component, OnInit, OnDestroy} from "@angular/core";
import {NgForm, NgModel, FormGroup, FormControl, Validators} from '@angular/forms';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';
import {MessengerUsersService} from "./messengerUsers.service";
import {MessengerUsersDetailService} from "./messengerUsersDetail.service";
import {MessengerChatService} from "./messengerChat.service";

@Component({
    selector: 'app-messenger__chat',
    templateUrl: 'messengerChat.component.html'
})

export class MessengerChatComponent implements OnInit, OnDestroy {  

    private subscription: Subscription;
    
    myForm: FormGroup;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private users: MessengerUsersService,
        private usersDetail: MessengerUsersDetailService,
        private chat: MessengerChatService
    ){

        this.myForm = new FormGroup({             
            'message': new FormControl()
        });

        this.subscription = route.params.subscribe(params => {
            this.selectedId = Number.parseInt(params['id']);
            this.selectedUser = this.usersDetail.getDataByUserId(this.selectedId);

            this.chatData = this.chat.getDataByChatId(this.selectedId);
        });
    }

    chatData = [];
    usersOnline = [];
    usersAway = [];
    usersBusy = [];
    usersOffline = [];
    selectedUser = {};
    selectedId: number = 0;
    inputValue: string = '';

    isExistsJustNowBlock = function() {
        let res = 0;
        let historyCount = this.chatData.history.length;

        if (historyCount > 0 ) {
            if (this.chatData.history[historyCount - 1].date == 'just now') {
                res = historyCount - 1;
            } else {
                res = 0;
            }
        } else {
            res = 0;
        }

        return res;
    };

    pushMessage = function(msg) {
        let isExistsJustNowBlock = this.isExistsJustNowBlock()
        if (isExistsJustNowBlock > 0) {
            this.chatData.history[isExistsJustNowBlock].messages.push({
                author: 'me',
                msg: msg,
                isNew: true                
            });
        } else {
            this.chatData.history.push({
                date: 'just now',
                messages: [
                    {
                        author: 'me',
                        msg: msg,
                        isNew: true
                    }
                ]
            });
        }
    };

    ngOnInit() {

        this.selectedId = Number.parseInt(this.route.snapshot.paramMap.get('id'));
        this.selectedUser = this.usersDetail.getDataByUserId(this.selectedId);
        
        this.chatData = this.chat.getDataByChatId(this.selectedId);

        this.usersOnline = this.users.getDataByUserStatus('online');
        this.usersAway = this.users.getDataByUserStatus('away');
        this.usersBusy = this.users.getDataByUserStatus('busy');
        this.usersOffline = this.users.getDataByUserStatus('offline');

    }

    submit(){

        this.pushMessage(this.myForm.controls["message"].value);
        this.inputValue = '';

        eval(`
            $(document).trigger('chatui__submit');
        `);
    }

    ngOnDestroy() {

        this.subscription.unsubscribe();

    }

}   