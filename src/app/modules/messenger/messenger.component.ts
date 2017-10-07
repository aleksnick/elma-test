import {Component, HostBinding, OnInit} from "@angular/core";


@Component({
    selector: 'app-messenger',
    templateUrl: 'messenger.component.html'
})

export class MessengerComponent implements OnInit {  
	@HostBinding('class') classes = 'app-messenger';

    ngOnInit() {

        console.log('Start MessengerComponent...');

    }

}   