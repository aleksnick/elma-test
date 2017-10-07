
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";
import {MessengerComponent} from "./messenger.component";
import {MessengerProfileComponent} from "./messengerProfile.component";
import {MessengerMainComponent} from "./messengerMain.component";
import {MessengerUsersService} from "./messengerUsers.service";


@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        CommonModule,
        RouterModule,
        MessengerComponent,
        MessengerProfileComponent,
        MessengerMainComponent
    ],
    declarations: [
        MessengerComponent,
        MessengerProfileComponent,
        MessengerMainComponent
    ]
})

export class MessengerModule {
    
}