
import {BrowserModule, HammerGestureConfig} from "@angular/platform-browser";
import {NgRoutingModule} from "./ng-routing.module";
import {createInputTransfer, createNewHosts, removeNgStyles} from "@angularclass/hmr";
import {ApplicationRef, NgModule} from "@angular/core";
import {MessengerModule} from "./modules/messenger/messenger.module";
import {MessengerComponent} from "./modules/messenger/messenger.component";
import {MessengerProfileComponent} from "./modules/messenger/messengerProfile.component";
import {MessengerMainComponent} from "./modules/messenger/messengerMain.component";
import {MessengerUsersService} from "./modules/messenger/messengerUsers.service";



export class MyHammerConfig extends HammerGestureConfig  {
    overrides = <any>{
        'swipe': {velocity: 0.4, threshold: 20} // override default settings
    }
}

@NgModule({
    declarations: [
    ],
    imports: [    
        BrowserModule,
        NgRoutingModule,
        MessengerModule
    ],
    providers: [
        MessengerUsersService
    ],
    bootstrap: [
        MessengerMainComponent
    ]
})

export class AppModule {
    constructor(public appRef: ApplicationRef) {}

    hmrOnInit(store) {
        if (!store || !store.state) return;

        if ('restoreInputValues' in store) {
            store.restoreInputValues();
        }

        this.appRef.tick();
        delete store.state;
        delete store.restoreInputValues;
    }

    hmrOnDestroy(store) {
        let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
        store.disposeOldHosts = createNewHosts(cmpLocation);
        store.state = {data: 'yolo'};
        store.restoreInputValues  = createInputTransfer();
        removeNgStyles();
    }

    hmrAfterDestroy(store) {
        store.disposeOldHosts();
        delete store.disposeOldHosts;
    }
}
