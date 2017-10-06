
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {MessengerComponent} from "./messenger.component";
import {MessengerUsersService} from "./messengerUsers.service";

@NgModule({
    imports: [
        CommonModule
    ],
    exports: [
        CommonModule,
        MessengerComponent
    ],
    declarations: [
    MessengerComponent
    ]
})

export class MessengerModule {
    
}