
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MessengerMainComponent} from "./messengerMain.component";
import {MessengerProfileComponent} from "./messengerProfile.component";
import {MessengerChatComponent} from "./messengerChat.component";


const routes: Routes = [
    {path: 'users', component: MessengerMainComponent},
    {path: 'user/:id', component: MessengerProfileComponent},
    {path: 'user/:id/im', component: MessengerChatComponent}
];


@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class MessengerRoutingModule { }
