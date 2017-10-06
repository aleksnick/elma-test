import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MessengerComponent} from "./modules/messenger/messenger.component";


// const routes: Routes = [
//     {path: '', redirectTo: '/home', pathMatch: 'full'},
//     {path: 'home', component: HomeComponent},
//     {path: 'lazy', loadChildren: './modules/lazy/lazy.module#LazyModule'}
// ];


const routes: Routes = [
    {path: '', component: MessengerComponent}
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
