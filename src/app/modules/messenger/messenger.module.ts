
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule}   from '@angular/forms';
import {MessengerRoutingModule} from "./messengerRouting.module";
import {RouterModule, Routes} from "@angular/router";
import {MessengerComponent} from "./messenger.component";
import {MessengerProfileComponent} from "./messengerProfile.component";
import {MessengerMainComponent} from "./messengerMain.component";
import {MessengerChatComponent} from "./messengerChat.component";
import {MessengerUsersService} from "./messengerUsers.service";
import {MessengerUsersDetailService} from "./messengerUsersDetail.service";
import {MessengerChatService} from "./messengerChat.service";


@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        MessengerRoutingModule
    ],
    exports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        MessengerComponent,
        MessengerProfileComponent,
        MessengerMainComponent,
        MessengerChatComponent
    ],
    providers: [
        MessengerUsersService,
        MessengerUsersDetailService,
        MessengerChatService
    ]
})

export class MessengerModule {
    
}