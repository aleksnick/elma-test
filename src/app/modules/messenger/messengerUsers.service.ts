import { Injectable } from '@angular/core';

@Injectable()

export class MessengerUsersService {

    constructor() { }

    getDataFromServer = function() {
        return [
            {
                name: 'vasiliy',
                age: 13
            },
            {
                name: 'dmiriy',
                age: 18
            }
        ]
    };

}