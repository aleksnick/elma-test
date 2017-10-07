
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MessengerMainComponent} from "./messengerMain.component";
import {MessengerProfileComponent} from "./messengerProfile.component";


const routes: Routes = [
    {path: 'users', component: MessengerMainComponent},
    {path: 'user/:id', component: MessengerProfileComponent}
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
