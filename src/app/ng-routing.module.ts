import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MessengerComponent} from "./modules/messenger/messenger.component";
import {MessengerProfileComponent} from "./modules/messenger/messengerProfile.component";


// const routes: Routes = [
//     {path: '', redirectTo: '/home', pathMatch: 'full'},
//     {path: 'home', component: HomeComponent},
//     {path: 'lazy', loadChildren: './modules/lazy/lazy.module#LazyModule'}
// ];


const routes: Routes = [
    {path: '', redirectTo: '/users', pathMatch: 'full'},
    {path: 'users', component: MessengerComponent},
    // {path: '', component: MessengerComponent},
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
export class NgRoutingModule { }
