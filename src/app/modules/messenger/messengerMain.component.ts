import {Component, HostBinding, OnInit} from "@angular/core";


@Component({
    selector: 'app-messenger',
    templateUrl: 'messengerMain.component.html'
})

export class MessengerMainComponent implements OnInit {  
	@HostBinding('class') classes = 'app-messenger';

    ngOnInit() {

        console.log('********');

    }


}   